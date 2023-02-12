const balanceOutPut = document.getElementById("balance");
const depositInput = document.getElementById("deposit-input");

let defaultBalance = 1200;
balanceOutPut.innerText = `${defaultBalance}`;

/**
 * ! deposit functionality
 */

document.getElementById("deposit-button").addEventListener("click", () => {
  if (depositInput.value) {
    let depositAmount = parseFloat(depositInput.value);
    let previousDepositAmount = parseFloat(
      document.getElementById("deposit").innerText
    );
    document.getElementById("deposit").innerText = (depositAmount +=
      previousDepositAmount).toFixed(2);

    defaultBalance += parseFloat(depositInput.value);
    balanceOutPut.innerText = `${defaultBalance}`;
    depositInput.value = "";
  } else {
    console.log("input required");
  }
});

/**
 * ! Withdraw functionality
 */
document.getElementById("withdraw-button").addEventListener("click", () => {
  let withdrawInput = document.getElementById("withdraw-input");

  if (withdrawInput.value) {
    if (parseFloat(balanceOutPut.innerText) < parseFloat(withdrawInput.value)) {
      document.getElementById("withdrawWarning").style.visibility = "visible";
    } else {
      balanceOutPut.innerText =
        parseFloat(balanceOutPut.innerText) - parseFloat(withdrawInput.value);

      let previousWithdrawAmount = parseFloat(
        document.getElementById("withdraw").innerText
      );

      previousWithdrawAmount += parseFloat(withdrawInput.value);
      document.getElementById("withdraw").innerText =
        previousWithdrawAmount.toFixed(2);
    }

    withdrawInput.value = "";
  } else {
    document.getElementById("withdrawWarning").innerText =
      "Please enter the amount";
    document.getElementById("withdrawWarning").style.visibility = "visible";
  }
});
