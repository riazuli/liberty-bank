const loginButton = document.getElementById("loginbtn");

loginButton.addEventListener("click", function () {
  const loginArea = document.getElementById("login");
  loginArea.style.display = "none";
  const transationArea = document.getElementById("transation");
  transationArea.style.display = "block";

  const depositButton = document.getElementById("depositButton");
  depositButton.addEventListener("click", function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositAmountNumber = parseFloat(depositAmount);
    console.log(depositAmountNumber);
  });
});