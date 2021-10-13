const numbers = document.querySelector("#numbers");
const number = document.querySelectorAll(".number");
const math = document.querySelectorAll(".math");
const equal = document.querySelector("#equal");
const finalRes = document.querySelector("#finalRes");
const deleteBtn = document.querySelector("#delete");
const textMathCalc = document.querySelector("#textMathCalc");

let num = "";
let num1 = "";
let mathCalc="";

number.forEach(element => {
    element.addEventListener('click',()=>{
        num+=element.id;
        finalRes.innerText=num;
        textMathCalc.innerText="";
    })
});

math.forEach(element => {
    element.addEventListener('click',()=>{
      if(mathCalc===""){
        num1=num;
        num=""
        mathCalc=element.id;
        textMathCalc.innerText = element.id==="plus"?"+":(element.id==="minus"?"-":(element.id==="multiplication"?"*":(element.id==="part")?"/":"^"));
        
      }  
    })
});

equal.addEventListener('click',()=>{
        num= parseFloat(num) ;
        num1= parseFloat(num1);
        console.log(num1,num );
       if(mathCalc!=="") calculation(num, num1);
       
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
    textMathCalc.innerText="";
}

deleteBtn.addEventListener("click",()=>{
    finalRes.innerText=0.00;
    num="";
    num1="";
    mathCalc="";
})