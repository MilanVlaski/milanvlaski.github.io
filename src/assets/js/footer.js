class MyFooter extends HTMLElement {

    connectedCallback() {
        this.innerHTML = /*html*/`
        <footer class="container">
           Site made with <a href="https://www.11ty.dev/" target="_blank">11ty</a>
        </footer>
        `
    }
}

customElements.define('my-footer', MyFooter)
