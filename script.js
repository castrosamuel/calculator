var num1 = "";
var num2 = "";
var operator = "";

var displayDiv = document.querySelector("#display");

function clr(){  // clear
    console.log("clear");
    displayDiv.innerText = 0;
    num1 = "";
    num2 = "";
    operator = "";
}

function calculate(){  // total
    console.log("calculate");
    var total = 0;
    switch(operator){
        case "/":
            total = num2 / num1;
            break;
        case "-":
            total = num2 - num1;
            break;
        case "+":
            total = num2 + num1;
            break;
        case "*":
            total = num2 * num1;
            break;
    }
    operator = "";
    num1 = total;
    displayDiv.innerText = total;
}

function setOP(oper){ // * / + -
    console.log(oper);
    operator = oper
    num2 = num1;
    num1 = "";
}

function press(key){  // number
    console.log(key);
    num1 += key;
    displayDiv.innerText = num1;
}