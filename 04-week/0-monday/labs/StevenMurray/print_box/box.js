function printBox() {
    var resultDiv = document.getElementById("result");
    var height = document.getElementById("height").value;
    var width = document.getElementById("width").value;

    var output = "";
    var text = "*";
    var space = "-";


    output += text.repeat(width) + "<br>"; //top of box
    for (var i = 0; i < height - 2; i++) {
        output += text + space.repeat(width - 2) + text + "<br>";
    }
    output += text.repeat(width); //bottom of box

    resultDiv.innerHTML = output;
}

var generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', printBox);

/*
**********
*        *
*        *
*        *
**********

*/