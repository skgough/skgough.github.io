const articles = document.querySelector('.swipe')
window.carousel = new Swipe(articles, {
    startSlide: 0,
    draggable: false,
    autoRestart: false,
    continuous: false,
    disableScroll: false,
    stopPropagation: true,
    callback: function (index) {
        let buttons = Array.from(document.querySelectorAll('.gotos button'))
        let current = buttons[index]
        let parent = current.parentElement
        let previous = document.querySelector('.gotos button.selected')
        let currentWidth = current.getBoundingClientRect().width
        let parentWidth = parent.getBoundingClientRect().width
        let scrollPosition = (current.offsetLeft - parent.offsetLeft) + (currentWidth/2 - parentWidth/2)
        
        previous.classList.remove('selected')
        current.classList.add('selected')
               
        buttons[index].parentElement.scrollTo({top: 0, left: scrollPosition, behavior: "smooth"})

    }
});
const buttons = Array.from(document.querySelectorAll('button'))
for (const index in buttons) {
    buttons[index].addEventListener('click', () => {
        carousel.slide(index)
    })
}
