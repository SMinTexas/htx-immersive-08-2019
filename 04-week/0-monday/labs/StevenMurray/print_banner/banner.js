function printBanner() {
    var resultDiv = document.getElementById("result");
    var banner = document.getElementById("bannerText").value;
    var leftSide = "*";
    var rightSide = "*";
    var topBottom = "*";
    var result = "";

    var lengthOfBanner = banner.length;
    for (var i = 0; i < lengthOfBanner; i++) {
        result += topBottom; //top of banner box
    }

    result += "<br>" + leftSide + banner + rightSide + "<br>";

    for (var i = 0; i < lengthOfBanner; i++) {
        result += topBottom; //bottom of banner box
    }

    resultDiv.innerHTML = result;
}

var generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', printBanner);

/*
****************************
* Welcome to DigitalCrafts *
****************************

*/