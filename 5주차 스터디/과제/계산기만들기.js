
function add(char) {
    var result = document.getElementById('result');

    result.textContent = result.textContent + char;
}

function calculate() {
    var result = document.getElementById('result').textContent;
    var calculatedResult = eval(result);
    document.getElementById('result').textContent = calculatedResult;
}

function calculatePercent() {
    var result = document.getElementById('result');
    var currentValue = parseFloat(result.textContent);
  
    var percentValue = currentValue * 0.01;
    result.textContent = percentValue;
  }
  
function reset() {
    document.getElementById('result').textContent = ""
}

