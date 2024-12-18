import Typed from 'typed.js'
import '../css/styles.css'
import '../js/components/themeColor.js'
import 'preline'

const textTyped = document.querySelector('#typed-words')
const currentYear = document.querySelector('#current-year')

function main() {
    typedText()
    getCurrentYear()
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

document.addEventListener('DOMContentLoaded', main)