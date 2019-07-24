var numbers=[], //accumulates the numbers entered by user
    operations= [], //accumulates the functions to be executed
    result = 0,
    i=0,
    onScreen = document.getElementById('screen'), //text on screen
    numCount = 0,
    firstNo = true, //to be able to tell if the digit entered is the first digit.
    opPressed =true,
    equalPressed = false; //activated when an operator is pressed. Deactivated when a number is pressed 

function clrScreen(){
  onScreen.innerHTML = "0.";
  numCount = 0;
  result = 0;
  numbers = [];
  operations = [];
  firstNo=true;
  equalPressed = false;
  opPressed=true;
}
function addNumber(no){
  var number = document.getElementById(no).innerHTML;
  if(onScreen.innerHTML == "0."&&firstNo===true&&opPressed===true){
    onScreen.innerHTML = number;
    numCount++;
    firstNo=false;
    opPressed = false;
  }
   else if(firstNo===true&&numCount<19&&opPressed===true){
    onScreen.innerHTML = number;
    numCount++;
    firstNo=false;
    opPressed = false;
  }
  else if (numCount<19&&firstNo===false){
    onScreen.innerHTML = onScreen.innerHTML+number;
    numCount++;
    opPressed = false;
  }
  else if (equalPressed===true){
  	clrScreen();
  	onScreen.innerHTML = number;
    numCount++;
    firstNo=false;
    opPressed = false;
  }
}
function pushOp(op){
  if(opPressed===false){
    console.log(op);
    if(equalPressed===false){
    numbers.push(onScreen.innerHTML);
    }
    else{
    equalPressed=false;
    }
    if(op!='='){
      operations.push(op);
      opPressed = true;
    }
    else{
      equalPressed=true;
    }
    firstNo = true;
    
  }
    if(numbers.length>1){
      showResult();
    }
}
function sum(i){
  console.log("no1 = ",parseFloat(numbers[0]),"sum= ",parseFloat(numbers[i])+parseFloat(numbers[i+1]));
  result = result + parseFloat(numbers[i+1]);
  i++;
}
function div(i){
  result =result/parseFloat(numbers[i+1]);
  i++;
}
function mult(i){
  result =result*parseFloat(numbers[i+1]);
  i++;
}
function subs(i){
  result -= parseFloat(numbers[i+1]);
  i++;
}                        
function showResult(){
  result = parseFloat(numbers[0]);
  console.log('result =',result,"operations =", operations);
  for(var j=0; j<(numbers.length-1);j++){
    decide(operations[j],j,operations);
  }
  onScreen.innerHTML = result;
  firstNo=true;
}
function equalTo(){
  console.log("numbers",numbers);
  numbers.push(onScreen.innerHTML);
  showResult();
}
function decide (currentValue, index, array){
  console.log("currentValue=",currentValue,"index=",index);
  if(currentValue=="+"){
    sum(index);
  }
  else if(currentValue =="-"){
    subs(index);
  }
  else if(currentValue =="x"){
    mult(index);
  }
  else if(currentValue =="/"){
    div(index);
  }
  else if(currentValue == "="){
    console.log("numbers",numbers);
    opPressed = false;
    i++;
  }
}
