function gen_Numbers() {
    var resultDiv = document.getElementById("result");
    var startNumber = document.getElementById("start").value;
    var endNumber = document.getElementById("end").value;

    var text = "";
    startNumber = Number(startNumber);
    endNumber = Number(endNumber);

    for (; startNumber <= endNumber; startNumber++) {
        text += "<br> " + startNumber;
    }
    resultDiv.innerHTML = text;
}

var generate_Button = document.getElementById('generate-button');
generate_Button.addEventListener('click', gen_Numbers);