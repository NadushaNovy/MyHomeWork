const circle = document.querySelector('.circle');
const turn_red = document.querySelector('.turn-red');
const turn_green = document.querySelector('.turn-green');
const turn_blue = document.querySelector('.turn-blue');
turn_red.addEventListener('click', function(){
    circle.style.backgroundColor = "red";
});
turn_green.addEventListener('click', function(){
    circle.style.backgroundColor = "green";
})
turn_blue.addEventListener('click', function(){
    circle.style.backgroundColor = "blue"; 
})