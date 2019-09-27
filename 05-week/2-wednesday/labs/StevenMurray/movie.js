// Credit: https://en.wikipedia.org/wiki/Ajax_%28programming%29
// This is the client-side script.

// AJAX
$.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/?i=tt0080684&apikey=5f0b3db0",
    dataType: "JSON", // data type expected from server
    success: function(response) {
        console.log(response);
        showMovieTitle(response.Title, response.Year);
        showMovieRatingRunTimeGenre(response.Rated, response.Runtime, response.Genre);
        showMoviePoster(response.Poster);
        var movieTrailer = "https://www.youtube.com/embed/mz_YWNhKOkM";
        showMovieTrailer(movieTrailer);
        showMovieProduction(response.Production);
        showMovieDirector(response.Director);
        showMovieWriters(response.Writer);
        showMovieActors(response.Actors);
        showMoviePlot(response.Plot);
        showMovieWebsite(response.Website);
    },
    error: function(error) {
        console.log("Error: " + error);
    }
});

function showMovieTitle(title, year) {
    var movieTitle = $("<h1/>").text(title + " (" + year + ")");
    $(".header").append(movieTitle);
}

function showMovieRatingRunTimeGenre(rating, runningtime, genre) {
    var runtime = convertRunningTime(runningtime);
    var movieDetails = $("<h4/>").text(rating + " | " + runtime + " | " + genre);
    //var movieDetails = $("<h4/>").text(rating + " | " + runningtime + " | " + genre);
    $(".header").append(movieDetails);
}

function showMoviePoster(poster) {
    var moviePoster = $("<img />").attr("src", poster);
    //$(".container").append(moviePoster);
    $(".poster").append(moviePoster);
}

function showMovieTrailer(trailer) {
    var movieTrailer = $("<iframe />").attr("src", trailer, "height", "315", "width", "560");
    //$(".container").append(movieTrailer);
    $(".trailer").append(movieTrailer);
}

function showMovieProduction(production) {
    var movieProduction = $("<h4/>").text(production);
    $(".info").append("Released by " + production + "<br>");
}

function showMovieDirector(director) {
    var movieDirector = $("<h4/>").text(director);
    $(".info").append("Directed by " + director + "<br>");
}

function showMovieWriters(writer) {
    var movieWriter = $("<h4/>").text(writer);
    $(".info").append("Screenplay Written by " + writer + "<br>");
}

function showMovieActors(actors) {
    var movieActors = $("<h4/>").text(actors);
    $(".info").append("Starring " + actors + "<br><br><br>");
}

function showMoviePlot(plot) {
    var moviePlot = $("<h4/>").text(plot);
    $(".info").append(plot + "<br><br><br>");
}

function showMovieWebsite(website) {
    var movieWebsite = $("<h4/>").text(website);
    $(".info").append(movieWebsite);
}

function convertRunningTime(runtime) {
    var mins = runtime.substring(0, 3);
    var minutes = Number(mins);
    var hours = Math.floor(minutes / 60);
    var convertedMinutes = minutes % 60;
    return hours + "h " + convertedMinutes + "min";

}