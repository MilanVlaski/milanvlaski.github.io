---
title: Elegant DOM Manipulation
tags: ["zapis-fit"]
---

In my Vanilla JS app, [zapis.fit](https://zapis.fit), I made an elegant solution that was the result of a few deliberate design choices. It saved me a bunch of time.

## The choices

1. The browser's IndexedDB is used for storage of workout objects
2. The `startedAt` property is used as a primary key. It's a UNIX timestamp, created with `Date.now()`.  Here's how that looks. No brainer:
```javascript
db.createObjectStore('workouts', { keyPath: 'startedAt' })
```
3. DOM elements are identified with this timestamp.
## Elaboration

Now, a user may want to edit their workout. It's a simple patch to both the database, and the DOM. Something like this:

```javascript
if (e.target.dataset.action == 'confirmWorkoutChanges') {
	e.preventDefault() // Stop form reload

	const $workout = e.target.querySelector('the-workout')
	const workout = $workout.workout
	await db.patchWorkout(workout)
	$workoutLog.patchWorkoutCard(workout)
	resetDialog()
}
```

But the user should be able to change the time too, right? Oh no, but it's a primary key, and I gotta change the DOM and ughhhhhh... This is way more work than I thought :(

But okay, let's move forward, see what's actually required...

## Analysis

1. The old element must be deleted.
2. The new one must be added in the right place.

### The pieces
How do we find out where to put it? It can be stated:

> We need to figure out which workout goes "below" our new timestamp.

The DOM API has an `insertBefore()` function. 

### The solution

This simple function solves the DOM manipulation *entirely*:
```javascript
function replaceWorkout(id, workout, putBeforeId) {
	document.getElementById(id).remove()

	const $successor = putBeforeId ? document.getElementById(putBeforeId) : null

	// Pure elegance: inserts exactly where it belongs or appends if null
	this.$workoutsList.insertBefore(new WorkoutCard(workout), $successor)
}
```
See, we're not searching anything in the DOM, we're letting the database handle the `putBeforeId` for us, with this tiny piece of code, which we won't analyze much. Suffice to say, it finds the id of the workout above which we place our element, with our `insertBefore` function:
```javascript
const range = IDBKeyRange.upperBound(newWorkout.startedAt, true)
const cursorReq = store.openCursor(range, 'prev')
let putBeforeId = null

cursorReq.onsuccess = (e) => {
	const cursor = e.target.result
	if (cursor) {
		putBeforeId = cursor.key
	}
}
```

`insertBefore` can take null as the second parameter, in which case, it simply appends the element to the parent. The code speaks for itself:
```javascript
// Both lines do the exact same thing
parentNode.insertBefore(newNode, null)
parentNode.append(newNode)
```

So, you know, you don't even have to think of any edge cases. They're handled.

Final DOM manipulation code looks like this. Not that bad:
```javascript
$editDialog.addEventListener('submit', async (e) => {
	if (e.target.dataset.action == 'confirmWorkoutChanges') {
		e.preventDefault()

		const $workout = e.target.querySelector('the-workout')
		console.assert($workout)

		const workout = $workout.workout
		const originalTimestamp = Number($workout.dataset.originalTimestamp)

		try {
			const { newWorkout, putBeforeId } = await db.putWorkout(originalTimestamp, workout)
			$workoutLog.replaceWorkout(originalTimestamp, newWorkout, putBeforeId)
			resetDialog()
		} catch (error) {
			if (error.name === 'TimestampAlreadyExists') {
				showDuplicateWorkoutError()
			} else {
				throw error
			}
		}
	}
})
```
That's it.
