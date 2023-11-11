function toggleDarkMode() {
    document.body.classList.toggle("dark-mode")
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.style.transition = 'none';
    document.body.classList.add('dark-mode');
    setTimeout(() => {document.body.style.transition = '500ms'}, 10);
}