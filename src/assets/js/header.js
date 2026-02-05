class MyHeader extends HTMLElement {

    connectedCallback() {
        this.innerHTML = /*html*/`
        <nav style="display: flex; justify-content: space-between;">
            <a href="/">Home</a>

        <ul style="list-style: none; display: flex; gap: 0.5rem; flex-direction: row;">
            <li><a href="/writing">Writing</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/writing/my_work">My Services</a></li>
        </ul>
        </nav>
    `
    }
}

customElements.define('my-header', MyHeader)
