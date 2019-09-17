function longVowels() {
    var resultDiv = document.getElementById("result");
    var vowel = document.getElementById("vowelText").value;
    var result = "";

    result = repeatStringNumTimes(vowel, 4);

    resultDiv.innerHTML = result;
}

function repeatStringNumTimes(str, num) {
    var count = 0;
    var lengthOfString = str.length;
    result = "";
    for (var i = 0; i < lengthOfString; i++) {
        var letter = str.charAt(i);
        if (letter == 'a' || letter == 'e' ||
            letter == 'i' || letter == 'o' ||
            letter == 'u' || letter == 'A' ||
            letter == 'E' || letter == 'I' ||
            letter == 'O' || letter == 'U') {
            count++;
            if (count > 1) {
                result += letter.repeat(num);
            } else {
                result += letter;
            }
        } else {
            result += letter;
            count = 0;
        }
    }
    return result;
}

var generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', longVowels);