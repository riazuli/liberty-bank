// Login Event
const loginButton = document.getElementById("loginbtn");
loginButton.addEventListener("click", function () {
  const loginArea = document.getElementById("login");
  loginArea.style.display = "none";
  const transationArea = document.getElementById("transation");
  transationArea.style.display = "block";


});

// Deposit Event
const depositButton = document.getElementById("depositButton");
depositButton.addEventListener("click", function () {
  const depositAmount = document.getElementById("depositAmount").value;
  const depositAmountNumber = parseFloat(depositAmount);

  const depositText = document.getElementById("depositText").innerText;
  const depositTextNumber = parseFloat(depositText); 
  const totalDepositAmount = depositAmountNumber + depositTextNumber;
  document.getElementById("depositText").innerText = totalDepositAmount;
  document.getElementById("depositAmount").value = "";
});