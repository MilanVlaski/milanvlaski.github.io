class ThemeSelect extends HTMLElement {
    connectedCallback() {

        const select = this.querySelector('select');
        
        const savedTheme = localStorage.getItem('theme') || 'system';
        select.value = savedTheme;

        select.addEventListener('change', (e) => {
            const theme = e.target.value;

            if (theme === 'system') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.removeItem('theme');
            } else {
                document.documentElement.setAttribute('data-theme', theme);
                localStorage.setItem('theme', theme);
            }
        })
    }
}

customElements.define('theme-select', ThemeSelect);
