const numbers = document.querySelector("#numbers");
const number = document.querySelectorAll(".number");
const math = document.querySelectorAll(".math");
const equal = document.querySelector("#equal");
const finalRes = document.querySelector("#finalRes");

let num = "";
let num1 = "";
let mathCalc="";

number.forEach(element => {
    element.addEventListener('click',()=>{
        num+=element.id;
        finalRes.innerText=num;
        console.log("num",num);
    })
});

math.forEach(element => {
    element.addEventListener('click',()=>{
        num1=num;
        num=""
        mathCalc=element.id;
        console.log(mathCalc);
    })
});

equal.addEventListener('click',()=>{
        num= parseFloat(num) ;
        num1= parseFloat(num1);
        console.log(num1,num );
        calculation(num, num1);
       
})

function calculation(a , b) {
 
    switch (mathCalc) {
        case "plus": finalRes.innerText= a+b ;
            break;
        case "minus": finalRes.innerText= b-a;
            break;
        case "multiplication": finalRes.innerText= b*a;
            break;
        case "part": finalRes.innerText= b/a;
            break;
        case "pwr": finalRes.innerText= Math.pow(b,a);
            break;
    
        default: console.log("error");
            break;
    }
    num="";
    num1="";
    mathCalc="";
}