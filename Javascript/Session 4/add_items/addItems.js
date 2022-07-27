// These elements will be used in both functions.
const numberFun = document.forms["numberFun"];
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const results = document.getElementById("results");
const submitButton = document.getElementById("submitButton");

function validate() {
    numberFun.className = "needs-validation";
  
    if (!numberFun.checkValidity()) {
      numberFun.className = "was-validated";
      return false;
    }
  
    let operand1 = parseInt(num1.value, 10);
    let operand2 = parseInt(num2.value, 10);
  
    document.getElementById("addResult").innerText = operand1 + operand2;
    document.getElementById("subtractResult").innerText = operand1 - operand2;
    document.getElementById("multiplyResult").innerText = operand1 * operand2;
    document.getElementById("divideResult").innerText = operand1 / operand2;
  
    results.style.display = "block";
    submitButton.innerText = "Recalculate";
  
    // We always return false so that the form doesn't submit.
    // Submission causes the page to reload.
    return false;
  }

  function resetView() {
    numberFun.className = "needs-validation";
    results.style.display = "none";
    submitButton.innerText = "Calculate";
    num1.focus();
  }