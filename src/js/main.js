import '../scss/styles.scss'
import '../css/style.css'
import './components/colorMode.js'
import Typed from 'typed.js'
import * as bootstrap from 'bootstrap'

const textTyped = document.querySelector('#typed-words')
const currentYearText = document.querySelector('#current-year')

function main() {
  typedText()
  getCurrentYear()
}

function typedText(){
  new Typed(textTyped, {
    strings: ['backend developer', 'freelancer'],
    typeSpeed: 90,
    loop: true
  })
}

function getCurrentYear(){
  const year = new Date().getFullYear()
  currentYearText.textContent = year
}

document.addEventListener('DOMContentLoaded', main)