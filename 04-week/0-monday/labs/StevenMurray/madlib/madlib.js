function madlibIt() {
    var storyDiv = document.getElementById("story");
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;

    storyDiv.innerHTML = name + "'s favorite subject in school was " + subject + " (believe it or not)"
}

var madlibButton = document.getElementById('madlib-button');
madlibButton.addEventListener('click', madlibIt);