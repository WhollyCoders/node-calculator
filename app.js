console.log('Hello WhollyCoder!!!');
console.log('Calculator application is loading...');
var firstValue = 0;
var secondValue = 0;
var enterButtonClicked = false;
var currentOperator = '';
var currentOperation = document.getElementById('currentOperation');
var numbers = [];
var outputArea = document.getElementById('outputArea');
var allNumberButtons = document.getElementsByClassName('btn-number');
for(var i = 0; i < allNumberButtons.length; i++){
  allNumberButtons[i].addEventListener('click', displayValue);
}

var allOperatorButtons = document.getElementsByClassName('btn-operator');
for(var i = 0; i < allOperatorButtons.length; i++){
  allOperatorButtons[i].addEventListener('click', saveFirstValue);
}

function saveFirstValue(e){
  var buttonValue = e.target.innerHTML;
  firstValue = parseFloat(outputArea.innerHTML);
  numbers[0] = firstValue;
  switch(buttonValue){
    case "+":
        currentOperation.innerHTML = 'addition';
        console.log('You entered a +');
        console.log('Current Operation: '+currentOperation.innerHTML);
        outputArea.innerHTML = 0;
        break;
    case "-":
        currentOperation.innerHTML = 'subtraction';
        console.log('You entered a -');
        console.log('Current Operation: '+currentOperation.innerHTML);
        outputArea.innerHTML = 0;
        break;
    case "x":
        currentOperation.innerHTML = 'multiplication';
        console.log('You entered a x');
        console.log('Current Operation: '+currentOperation.innerHTML);
        outputArea.innerHTML = 0;
        break;
    default:
        currentOperation.innerHTML = 'division';
        console.log('You entered a /');
        console.log('Current Operation: '+currentOperation.innerHTML);
        outputArea.innerHTML = 0;
        break;
  }
}

var enterButton = document.getElementById('btn-enter');
enterButton.addEventListener('click', saveSecondAndCompute)

function saveSecondAndCompute(e){
    currentOperator = currentOperation.innerHTML;
    enterButtonClicked = true;
    var buttonValue = e.target.innerHTML;
    console.log('The button value is: '+buttonValue);
    secondValue = parseFloat(outputArea.innerHTML);
    numbers[1] = secondValue;
  switch(currentOperator){
      case "addition":
        outputArea.innerHTML = (firstValue + secondValue);

        break;
      case "subtraction":
        outputArea.innerHTML = (firstValue - secondValue);

        break;
      case "multiplication":
        outputArea.innerHTML = (firstValue * secondValue);

        break;
      default:
        outputArea.innerHTML = (firstValue / secondValue);

        break;
  }
}

function displayValue(e){
  var buttonValue = e.target.innerHTML;
  console.log(buttonValue);
  buttonValue = parseInt(buttonValue);
  if(outputArea.innerHTML !== "0"){
    switch(buttonValue) {
        case 1:
            if(enterButtonClicked){
              outputArea.innerHTML = buttonValue;
              enterButtonClicked = false;
            }else{
              outputArea.innerHTML += buttonValue;
            }
            break;
            case 2:
                if(enterButtonClicked){
                  outputArea.innerHTML = buttonValue;
                  enterButtonClicked = false;
                }else{
                  outputArea.innerHTML += buttonValue;
                }
                break;
                case 3:
                    if(enterButtonClicked){
                      outputArea.innerHTML = buttonValue;
                      enterButtonClicked = false;
                    }else{
                      outputArea.innerHTML += buttonValue;
                    }
                    break;
                    case 4:
                        if(enterButtonClicked){
                          outputArea.innerHTML = buttonValue;
                          enterButtonClicked = false;
                        }else{
                          outputArea.innerHTML += buttonValue;
                        }
                        break;
                        case 5:
                            if(enterButtonClicked){
                              outputArea.innerHTML = buttonValue;
                              enterButtonClicked = false;
                            }else{
                              outputArea.innerHTML += buttonValue;
                            }
                            break;
                            case 6:
                                if(enterButtonClicked){
                                  outputArea.innerHTML = buttonValue;
                                  enterButtonClicked = false;
                                }else{
                                  outputArea.innerHTML += buttonValue;
                                }
                                break;
                                case 7:
                                    if(enterButtonClicked){
                                      outputArea.innerHTML = buttonValue;
                                      enterButtonClicked = false;
                                    }else{
                                      outputArea.innerHTML += buttonValue;
                                    }
                                    break;
                                    case 8:
                                        if(enterButtonClicked){
                                          outputArea.innerHTML = buttonValue;
                                          enterButtonClicked = false;
                                        }else{
                                          outputArea.innerHTML += buttonValue;
                                        }
                                        break;
                                        case 9:
                                            if(enterButtonClicked){
                                              outputArea.innerHTML = buttonValue;
                                              enterButtonClicked = false;
                                            }else{
                                              outputArea.innerHTML += buttonValue;
                                            }
                                            break;
        default:
            if(enterButtonClicked){
              outputArea.innerHTML = buttonValue;
              enterButtonClicked = false;
            }else{
              outputArea.innerHTML += buttonValue;
            }
    }
  }else{
    outputArea.innerHTML = buttonValue;
  }
}

function processOperation(e){
  var buttonValue = e.target.innerHTML;
  console.log(buttonValue);
}


var allClearButton = document.getElementById('btn-allClear');
allClearButton.addEventListener('click', clearDisplay);

function clearDisplay(){
  outputArea.innerHTML = 0;
}

var decimalButton = document.getElementById('btn-decimal');
decimalButton.addEventListener('click', addDecimal);

function addDecimal(){
  var outputString = outputArea.innerHTML;
  var decimalIncluded = outputString.includes(".");
  if(!decimalIncluded){
    outputArea.innerHTML += ".";
  }
}

var oppositeButton = document.getElementById('btn-opposite');
oppositeButton.addEventListener('click', computeOpposite);

function computeOpposite(){
  outputArea.innerHTML = parseFloat(outputArea.innerHTML) * -1;
}

var percentButton = document.getElementById('btn-percent');
percentButton.addEventListener('click', computePercentValue);

function computePercentValue(){
  outputArea.innerHTML = parseFloat(outputArea.innerHTML) / 100;
}
