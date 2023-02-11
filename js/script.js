const balanceOutPut = document.getElementById("balance");
const depositInput = document.getElementById("deposit-input");



let defaultBalance = 1200;
balanceOutPut.innerText = `$${defaultBalance}`;

/**
 * ! deposit functionality 
 */

document.getElementById("deposit-button").addEventListener("click", () => {
  let depositAmount = parseInt(depositInput.value);
  let previousDepositAmount = parseInt(
    document.getElementById("deposit").innerText
  );
  document.getElementById("deposit").innerText = depositAmount +=
    previousDepositAmount;

  defaultBalance += parseInt(depositInput.value);
  balanceOutPut.innerText = `$${defaultBalance}`;
  depositInput.value = "";
});


/**
 * ! Withdraw functionality 
 */
document.getElementById("withdraw-button").addEventListener("click", () => {
  let withdrawInput = document.getElementById("withdraw-input");
  balanceOutPut.innerText = defaultBalance - withdrawInput.value;
  let previousWithdrawAmount = parseInt(
    document.getElementById("withdraw").innerText
  );

  previousWithdrawAmount += parseInt(withdrawInput.value);
  document.getElementById("withdraw").innerText = previousWithdrawAmount;

  withdrawInput.value = "";
});
