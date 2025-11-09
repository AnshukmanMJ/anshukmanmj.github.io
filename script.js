const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.remove('grey-theme');
    } else {
        body.classList.add('grey-theme');
    }
});
