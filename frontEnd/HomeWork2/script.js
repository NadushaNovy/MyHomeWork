// const circle = document.querySelector('.circle');
// const turn_red = document.querySelector('.turn-red');
// const turn_green = document.querySelector('.turn-green');
// const turn_blue = document.querySelector('.turn-blue');
// turn_red.addEventListener('click', function(){
//     circle.style.backgroundColor = "red";
// });
// turn_green.addEventListener('click', function(){
//     circle.style.backgroundColor = "green";
// })
// turn_blue.addEventListener('click', function(){
//     circle.style.backgroundColor = "blue"; 
// })


const config = {
    availableColors: [
     "green","red", "blue" ,"navy", "violet"  
    ],
    defaultColor: "orange"
}
const buttonContainer = document.getElementById("switch_button-wrapper");
const circle = document.querySelector('#circle');
// function drawButton(color) {
//     const button = document.createElement("div");
//     button.innerHTML = `Paint it ${color}`;
//     button.classList.add("switch-button");

//     button.addEventListener("click", function() {
//         circle.style.backgroundColor = color;
//     });
//     buttonContainer.appendChild(button);
// }
// const availableColors = config.availableColors;
// availableColors.forEach(drawButton);

function paintCircle(color) {
    circle.style.backgroundColor = color;
}

function changeCircleColor (evt) {
const target = evt.target;
const color = target.getAttribute("data-color");
paintCircle(color);

}

function drawButton(color) {
    const button = document.createElement("div");
    button.innerHTML = `Paint it ${color}`;
    button.classList.add("switch-button");
    button.setAttribute("data-color", color);
    button.addEventListener("click",changeCircleColor);
    buttonContainer.appendChild(button);
}

const availableColors = config.availableColors;
availableColors.forEach(drawButton);

paintCircle(config.defaultColor);