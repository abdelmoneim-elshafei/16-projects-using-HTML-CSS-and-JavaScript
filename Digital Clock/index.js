const hourElement = document.getElementById("hour")
const minuetElement = document.getElementById("minutes")
const secondElement = document.getElementById("seconds")
const ampmElement = document.getElementById("ampm")


function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }

    h = h<10 ? "0" + h : h;
    s = s<10 ? "0" + s : s;
    m = m<10 ? "0" + m : m;

    hourElement.innerText = h;
    minuetElement.innerText = m;
    secondElement.innerText = s;
    ampmElement.innerText = ampm;
    setTimeout(() =>{
    updateClock()   
    },1000);
}

updateClock();

