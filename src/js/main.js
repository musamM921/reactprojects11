import '../css/style.css'

// main.js
const darkModeSwitcher = document.getElementById('toggleDarkMode')
darkModeSwitcher.addEventListener('input', () => {
  const htmlElement = document.documentElement
  htmlElement.classList.add('dark')
});

