const containerEl = document.querySelector(".container");

for (let index = 0; index < 32; index++) {
    const colorContainer = document.createElement("div");    
    colorContainer.classList.add("color-container");
    containerEl.appendChild(colorContainer);
}
const colorContainers = document.querySelectorAll(".color-container");

generateColor();
function generateColor(){
    colorContainers.forEach((colorContainerEl) =>{
        const color = randomColor();
        colorContainerEl.style.backgroundColor = "#" + color;
        colorContainerEl.innerText = "#" + color;
    })
}
function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6; 
    let colorCode = "";
    for (let index = 0; index < colorCodeLength ; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}