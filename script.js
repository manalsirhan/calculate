let numbers = document.getElementById("numbers");
let number = document.getElementsByClassName("number");
console.log(number);
number=[...number]
number.forEach(element => {
    element.addEventListener('click',()=>{
        console.log(element.id);
    })
});