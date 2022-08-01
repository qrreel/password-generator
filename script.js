const generatePasswordForm = document.getElementById('generatePasswordForm')
const passwordDisplay = document.getElementById('passwordDisplay')
const passwordLengthNumber = document.getElementById('passwordLengthNumber')
const passwordLengthRange = document.getElementById('passwordLengthRange')
const includeUppercase = document.getElementById('includeUppercase')
const includeNumbers = document.getElementById('includeNumbers')
const includeSymbols = document.getElementById('includeSymbols')

const LOWERCASE_CHARACTER_CODES = charactersArray(97, 122)
const UPPERCASE_CHARACTER_CODES = charactersArray(65, 90)
const NUMBER_CHARACTER_CODES = charactersArray(48, 57)
const SYMBOL_CHARACTER_CODES = charactersArray(33, 47)
    .concat(charactersArray(58, 64))
    .concat(charactersArray(91, 96))
    .concat(charactersArray(123, 126))


passwordLengthNumber.addEventListener('input', syncCharacterAmount)
passwordLengthRange.addEventListener('input', syncCharacterAmount)

generatePasswordForm.addEventListener('submit', e => {
    e.preventDefault()
    const passwordLengt = passwordLengthNumber.value
    const uppercase = includeUppercase.checked
    const numbers = includeNumbers.checked
    const symbols = includeSymbols.checked
    const password = createPassword(passwordLengt, uppercase, symbols, numbers)

    passwordDisplay.innerText = password
})

function createPassword(passwordLengt, uppercase, symbols, numbers) {
    let charCodes = LOWERCASE_CHARACTER_CODES
    if(uppercase) charCodes = charCodes.concat(UPPERCASE_CHARACTER_CODES)
    if(symbols) charCodes = charCodes.concat(SYMBOL_CHARACTER_CODES)
    if(numbers) charCodes = charCodes.concat(NUMBER_CHARACTER_CODES)

    const passwordCharacters = []
    for(let i = 1; i <= passwordLengt; i++) {
        const character = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(character))
    }

    return passwordCharacters.join('')
}

function charactersArray(low, high) {
    const array = []
    for(i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

function syncCharacterAmount(e) {
    const value = e.target.value
    passwordLengthNumber.value = value
    passwordLengthRange.value = value
    beforeGenerate()
}

function beforeGenerate() {
    const blankSpace = []
    for(let i = 1; i <= passwordLengthNumber.value; i++) {
        blankSpace.push("_")
    }
    const blankSpaceAmount = blankSpace.join(' ')

    return passwordDisplay.innerText = blankSpaceAmount
}

beforeGenerate()