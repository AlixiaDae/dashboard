const calculator = document.querySelector('.calculator')
const signup = document.querySelector('.signup')
const etch = document.querySelector('.etch')
const calcLabel = document.querySelector('.calculator-label')
const signLabel = document.querySelector('.signup-label')
const etchLabel = document.querySelector('.etch-label')

let array = [calculator, signup, etch]

array.forEach(e => {
    e.addEventListener('mouseover', () => {
        switch(e.className) {
            case 'calculator':
                calcLabel.classList.toggle('color')
                break;
            case 'signup':
                signLabel.classList.toggle('color')
                break;
            case 'etch':
                etchLabel.classList.toggle('color')
        }
    })
})

array.forEach(e => {
    e.addEventListener('mouseout', () => {
        switch(e.className) {
            case 'calculator':
                calcLabel.classList.remove('color')
                break;
            case 'signup':
                signLabel.classList.remove('color')
                break;
            case 'etch':
                etchLabel.classList.remove('color')
        }
    })
})