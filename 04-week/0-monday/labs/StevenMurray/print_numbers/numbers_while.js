function gen_Numbers() {
    var resultDiv = document.getElementById("result");
    var startNumber = document.getElementById("start").value;
    var endNumber = document.getElementById("end").value;

    var text = "";
    var i = startNumber;
    while (i <= endNumber) {
        text += "<br> " + i;
        i++;
    }
    resultDiv.innerHTML = text;
}

var generate_Button = document.getElementById('generate-button');
generate_Button.addEventListener('click', gen_Numbers);