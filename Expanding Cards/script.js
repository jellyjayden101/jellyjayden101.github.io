const panels = document.querySelectorAll('.panel');

// ADD ACTIVE CLASS
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

// REMOVE ACTIVE CLASS
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}