function caesarCipher() {
    var resultDiv = document.getElementById("result");
    var caesar = document.getElementById("caesarText").value;
    var keys = document.getElementById("keys").value;
    keys = Number(keys);
    console.log("Caesar = " + caesar + " | Key = " + keys)
    var result = caesarEncryption(caesar, keys);

    resultDiv.innerHTML = result;
}

function isUpperCase(str) {
    return str === str.toUpperCase();
}

function caesarEncryption(plaintext, shiftAmount) {
    var ciphertext = "";

    for (var i = 0; i < plaintext.length; i++) {
        var plainCharacter = plaintext.charCodeAt(i);
        if (plainCharacter >= 97 && plainCharacter <= 122) {
            ciphertext += String.fromCharCode((plainCharacter - 97 + shiftAmount) % 26 + 97);
        } else if (plainCharacter >= 65 && plainCharacter <= 90) {
            ciphertext += String.fromCharCode((plainCharacter - 65 + shiftAmount) % 26 + 65);
        } else {
            ciphertext += String.fromCharCode(plainCharacter);
        }
    }
    return ciphertext;
}

var generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', caesarCipher);