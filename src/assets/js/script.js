document.addEventListener('DOMContentLoaded', () => {
    console.log("manipula")
    const langSelect = document.getElementById('language-select');

    if (langSelect) {
        langSelect.addEventListener('change', (event) => {
            const targetUrl = event.target.value;
            
            // Redirect to the URL associated with the selected language
            if (targetUrl) {
                window.location.href = targetUrl;
            }
        })
    }
})
