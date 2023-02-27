let inputValid = document.getElementById("validation-input");
let totalLength = inputValid.getAttribute("data-length");
let inputTotalLength = parseInt(totalLength, 6);
inputValid.oninput = function () {
    if (inputValid.value.length === inputTotalLength) {
        inputValid.classList.remove("invalid");
        inputValid.classList.add("valid");
    }
    if (inputValid.value.length === 0) {
        inputValid.classList.remove("invalid");
        inputValid.classList.remove("valid");
    }
    if (inputValid.value.length !== inputTotalLength && inputValid.value.length !== 0) {
        inputValid.classList.add("invalid");
    };
}