let expression = '';

function clearResult() {
  expression = '';
  updateResult('');
}

function appendNumber(number) {
  expression += number;
  updateResult(expression);
}

function appendOperator(operator) {
  expression += operator;
  updateResult(expression);
}

function calculate() {
  try {
    const result = eval(expression);
    updateResult(result);
    expression = '';
  } catch (error) {
    updateResult('Error');
  }
}

function updateResult(value) {
  document.getElementById('result').value = value;
}