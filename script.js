var element = document.querySelector('.swipe')
window.carousel = new Swipe(element, {
    startSlide: 0,
    draggable: true,
    autoRestart: false,
    continuous: false,
    disableScroll: true,
    stopPropagation: true,
    callback: function (index) {
        let buttons = Array.from(document.querySelectorAll('button'));
        let previous = document.querySelector('button.selected')
            previous.classList.remove('selected')
        buttons[index].classList.add('selected')
    }
});
let buttons = Array.from(document.querySelectorAll('button'));
for (const index in buttons) {
    buttons[index].addEventListener('click', () => {
        carousel.slide(index)
    })
}