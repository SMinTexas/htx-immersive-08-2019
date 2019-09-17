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

    tip_amount = Number(tip_amount).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    resultDiv.innerHTML = "The suggested tip for " + service + " service is " + tip_amount;
}

var calc_Tip_Button = document.getElementById('calc-button');
calc_Tip_Button.addEventListener('click', calc_tip);