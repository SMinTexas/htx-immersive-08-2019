function gen_Numbers() {
    var resultDiv = document.getElementById("result");
    var size = document.getElementById("size").value;

    var output = "";
    var text = "*";
    var i = 0;
    while (i < size) {
        output += text.repeat(size) + "<br>";
        i++;
    }
    resultDiv.innerHTML = output;
}

var generate_Button = document.getElementById('generate-button');
generate_Button.addEventListener('click', gen_Numbers);