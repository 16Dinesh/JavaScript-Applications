const input = document.querySelector(".coupon");
const btn = document.querySelector('button');

const copyInput = (e) => {
    e.preventDefault();
    checkValue()
}

function checkValue() {
    let value = input.value;
    if(value == '') {
       alert("Not Copied")
    }
    else if (value !== checkValue) {
        navigator.clipboard.writeText(value)
        .then(() => {
            btn.textContent = "Copied!";
            setTimeout(() => {
                btn.textContent = "Copy";
            }, 3000)
        })
    }
}

btn.addEventListener("click", copyInput);