// Old Version button
function onClick1() {
    window.location.href = "#bmwE30"
}

// New version button
function onClick2() {
    window.location.href = "#bmwG20"
}

// Submit button
function btnSubmit() {
    window.location.reload(alert("Data anda telah tersimpan, kami akan menghubungi anda, terimakasih!"))
}

// Hamburger button
function burger(x) {
    x.classList.toggle("change")
}

// Menu for hamburger button
const hamburger = document.querySelector(".hamburger")
const rightNav = document.querySelector(".text-right-nav")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    rightNav.classList.toggle("active");
})