const mycanvas = document.getElementById("drawCanvas");
const colorPicker = document.getElementById("colorPicker");
const ctx = mycanvas.getContext("2d");

let isdrawing = false;
let Xaxis = 0;
let Yaxis = 0;

mycanvas.addEventListener('mousedown', (e) => {
    if (e.button === 0) {
        isdrawing = true;

        Xaxis = e.offsetX;
        Yaxis = e.offsetY;
    }
})

mycanvas.addEventListener('mouseup', (e) => {
    isdrawing = false;
})

mycanvas.addEventListener("mousemove", (e) => {
    if (isdrawing === true) {

        //line setting
        ctx.strokeStyle = colorPicker.value;
        ctx.lineWidth = "2";

        //line dimension
        ctx.beginPath();
        ctx.moveTo(Xaxis, Yaxis);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

        Xaxis = e.offsetX;
        Yaxis = e.offsetY;
    }
})

//reset btn
const reset = document.getElementById("clearbtn");
reset.addEventListener('click', (e) => {
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
})


