'use strict';

const wrapper = document.getElementById("wrapper");
const openButton = document.getElementById('openButton');
const hideButton = document.getElementById('hideButton');
var circles = null;
var circleNumber = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12];
var step = Math.PI / 6;
var radius = 300;

var i = 0;
function circleShow() {
    var i = 0;
    setInterval(function () {
        circles.forEach(function (circles, index) {
            console.log(circles, index);
            circles.style.left =  radius * Math.cos(step * index+i) + 'px';
            circles.style.top =  radius * Math.sin(step * index+i) + 'px';
        });
        i+=0.05
    },200);
}


// function circleShow() {
//     requestAnimationFrame(function animationStep() {
//         circles.forEach(function (circle, index) {
//             circle.style.left =  radius * Math.cos(step * index + i) + 'px';
//             circle.style.top =  radius * Math.sin(step * index + i) + 'px';
//
//         });
//         i+=0.05;
//         requestAnimationFrame(animationStep)
//     })
// }

function createCircle() {
    circleNumber.forEach(function (e, index) {
        var c = document.createElement('div');
        c.setAttribute('class', 'circle');
        wrapper.appendChild(c);
    });
    var circle = document.createElement('div');
    wrapper.appendChild(circle);
    circle.setAttribute('class', 'circle');
}

createCircle();
openButton.addEventListener('click', function () {
    circles = document.querySelectorAll(".circle");
    circleShow();
});
hideButton.removeEventListener('click', function () {
    circles = document.querySelectorAll(".circle");
    circleShow();
});
