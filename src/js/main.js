import Typed from 'typed.js'
import 'preline'
import { HSScrollspy } from 'preline'
import '../../public/css/styles.css'
import './components/themeColor.js'

const textTyped = document.querySelector('#typed-words')
const currentYear = document.querySelector('#current-year')

function main() {
    typedText()
    getCurrentYear()
    scrollspyInit()
}

function typedText() {
    new Typed(textTyped, {
        strings: ['desarrollador backend junior', 'ingeniero de sistemas'],
        typeSpeed: 90,
        loop: true,
    })
}

function getCurrentYear() {
    const year = new Date().getFullYear()
    currentYear.textContent = year
}

function scrollspyInit() {
    const scrollspy = document.querySelector('[data-hs-scrollspy="#scrollspy"]')
}

document.addEventListener('DOMContentLoaded', main)