function positiveNumbers() {
    var resultDiv = document.getElementById("result");
    var arr = [1, 2, 3];
    var arrLength = arr.length;
    var result = [];

    for (var i = 0; i < arrLength; i++) {
        console.log('This is i = ' + i)
        if (arr[i] > 0) {
            result.push(arr[i]);
            console.log('Iterating through arr : ' + result)
        }
    }

    resultDiv.innerHTML = "[" + result + "]";
}



var generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', positiveNumbers);