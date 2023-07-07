const btnel = document.querySelector(".btn");

btnel.addEventListener("mouseover", (event) => {

    const x = event.pageX - btnel.offsetLeft;
    const y = event.pageY - btnel.offsetTop;

    btnel.style.setProperty("--xPos", x + "px");
    btnel.style.setProperty("--yPos", y + "px");

});