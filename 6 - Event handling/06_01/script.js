// document.getElementById("logButton").onclick =  () => console.log("Don't click me!");

document.getElementById("logButton").addEventListener('click', () => console.log("Don't click me!"));
document.getElementById("logButton").addEventListener('click', (event) => console.log(event));