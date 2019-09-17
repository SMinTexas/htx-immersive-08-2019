function calc_tip() {
    var resultDiv = document.getElementById("result");
    var amount = document.getElementById("amt").value;
    var service = document.getElementById("service").value;
    var tip_Amount = 0;

    if (service == "Good")
        tip_amount = Number(amount) * .2;
    else if (service == "Fair")
        tip_amount = Number(amount) * .15;
    else
        tip_amount = Number(amount) * .1;

    var total = Number(amount) + Number(tip_amount);
    amount = Number(amount).toLocaleString('us-US', { style: 'currency', currency: 'USD' });
    total = Number(total).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    tip_amount = Number(tip_amount).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    resultDiv.innerHTML = "Bill Amount: " + amount +
        "\n\rTip: " + tip_amount +
        "\n\rTotal: " + total;
}

var calc_Tip_Button = document.getElementById('calc-button');
calc_Tip_Button.addEventListener('click', calc_tip);