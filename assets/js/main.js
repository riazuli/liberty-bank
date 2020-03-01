// Login Event
const loginButton = document.getElementById("loginbtn");
loginButton.addEventListener("click", function () {
  const loginArea = document.getElementById("login");
  loginArea.style.display = "none";
  const transationArea = document.getElementById("transation");
  transationArea.style.display = "block";


});


// Amount Calculator function
function spanTextChange(id, depositAmountNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = currentNumber + depositAmountNumber;
  document.getElementById(id).innerText = totalAmount;
}

// Input text to number function
function inputTextToNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}


// Deposit Event
const depositButton = document.getElementById("depositButton");

depositButton.addEventListener("click", function () {

  const depositMoney = inputTextToNumber("depositAmount");
  spanTextChange("depositText", depositMoney);
  spanTextChange("currentBalance", depositMoney);


  document.getElementById("depositAmount").value = "";
});



// withdraw Event
const withdrawButton = document.getElementById("withdrawButton");

withdrawButton.addEventListener("click", function () {
  const withdrawMoney = inputTextToNumber("withdrawAmount");
  spanTextChange("withdrawText", withdrawMoney);
  spanTextChange("currentBalance", -1 * withdrawMoney);

  document.getElementById("withdrawAmount").value = "";
});