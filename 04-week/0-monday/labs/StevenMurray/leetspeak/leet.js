function leetSpeak() {
    var resultDiv = document.getElementById("result");
    var leet = document.getElementById("leetText").value;
    var result = "";

    /*
        A -> 4
        E -> 3
        G -> 6
        L -> 1
        O -> 0
        S -> 5
        T -> 7
    */

    var lengthOfInput = leet.length;

    for (var i = 0; i < lengthOfInput; i++) {
        leet = leet.replace('A', '4');
        leet = leet.replace('a', '4');
        leet = leet.replace('E', '3');
        leet = leet.replace('e', '3');
        leet = leet.replace('G', '6');
        leet = leet.replace('g', '6');
        leet = leet.replace('L', '1');
        leet = leet.replace('l', '1');
        leet = leet.replace('O', '0');
        leet = leet.replace('o', '0');
        leet = leet.replace('S', '5');
        leet = leet.replace('s', '5');
        leet = leet.replace('T', '7');
        leet = leet.replace('t', '7');
    }

    result = leet;
    resultDiv.innerHTML = result;
}

var generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', leetSpeak);