function onClick1() {
    window.location.href = "#bmwE30"
}

function onClick2() {
    window.location.href = "#bmwG20"
}

function btnSubmit() {
    alert("Maaf, saat ini fungsi tombol belum berfungsi dengan baik")
}

function burger(x) {
    x.classList.toggle("change")
}

const hamburger = document.querySelector(".hamburger")
const rightNav = document.querySelector(".text-right-nav")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    rightNav.classList.toggle("active");
})