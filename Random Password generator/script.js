const btn = document.querySelector('button');
const checkNumber = document.getElementById('includeNumbers');
const checkSymbol = document.getElementById('includeSymbols');
const passwordLength = document.querySelector('#length');
const displayPassword = document.getElementById('passwordDisplay');

btn.addEventListener('click', passwordGenerator)

function passwordGenerator() {
    const length = parseInt(passwordLength.value);
    const checkedNumberInput = checkNumber.checked;
    const checkedSymbolInput = checkSymbol.checked;

    let number = "0123456789";
    let symbol = "!@#$%^&*_?'";
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(checkedNumberInput) characters += number;
    if(checkedSymbolInput) characters += symbol;

    let password = "";
    for(let i=0;i< length ; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    const final = displayPassword.classList.add("passDisplay");
    
    displayPassword.textContent = `${password}`
};