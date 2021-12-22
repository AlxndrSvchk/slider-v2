const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const btbDown = document.querySelector('.down-button')
const btbUp = document.querySelector('.up-button')

const slidesCounter = mainSlide.querySelectorAll('div').length

let activeSlide = 0

sidebar.style.top = `-${(slidesCounter - 1) * 100}vh`

function changeSlide(dir) {
    if (dir === 'down') {
        activeSlide--
        if (activeSlide < 0) {
            activeSlide = slidesCounter - 1
        }
    } else if (dir === 'up') {
        activeSlide++
        if (activeSlide === slidesCounter) {
            activeSlide = 0
        }
    }
    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlide * height}px)`
    sidebar.style.transform = `translateY(${activeSlide * height}px)`
}

btbDown.addEventListener('click', () => {
    changeSlide('down')
})
btbUp.addEventListener('click', () => {
    changeSlide('up')
})