// Login Event
const loginButton = document.getElementById("loginbtn");
loginButton.addEventListener("click", function () {
  const loginArea = document.getElementById("login");
  loginArea.style.display = "none";
  const transationArea = document.getElementById("transation");
  transationArea.style.display = "block";


});


function spanTextChange(id, depositAmountNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = currentNumber + depositAmountNumber;
  document.getElementById(id).innerText = totalAmount;
}

// Deposit Event
const depositButton = document.getElementById("depositButton");

depositButton.addEventListener("click", function () {
  const depositAmount = document.getElementById("depositAmount").value;
  const depositAmountNumber = parseFloat(depositAmount);

  spanTextChange("depositText", depositAmountNumber);
  spanTextChange("currentBalance", depositAmountNumber);


  document.getElementById("depositAmount").value = "";
});
