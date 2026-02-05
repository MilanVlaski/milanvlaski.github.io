class MyHeader extends HTMLElement {

    connectedCallback() {
        this.innerHTML = /*html*/`
        <nav>
            <a href="/">Home</a>
            <ul>
                <li><a href="/writing">Writing</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/writing/my_work">My Services</a></li>
            </ul>
        </nav>
    `
    }
}

customElements.define('my-header', MyHeader)
