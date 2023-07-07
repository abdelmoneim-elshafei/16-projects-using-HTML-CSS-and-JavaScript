const textareaEl = document.getElementById("textarea");
const totalcounterEl =document.getElementById("total-counter")
const remaining = document.getElementById("remaining-counter")
textareaEl.addEventListener("keyup", () => {
    updatecounter()
})

updatecounter();

function updatecounter() {
    totalcounterEl.innerHTML = textareaEl.value.length;
    remaining.innerHTML = 
    textareaEl.getAttribute("maxLength") -
    textareaEl.value.length;
}
