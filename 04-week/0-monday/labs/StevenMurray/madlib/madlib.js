function madlibIt() {
    var storyDiv = document.getElementById("story");
    storyDiv.innerHTML = "Steven's favorite subject in school was math (believe it or not)"
}

var madlibButton = document.getElementById('madlib-button');
madlibButton.addEventListener('click', madlibIt);