$(document).ready(function() {
    $("#profile-picture").click(function() {
        alert("D'oh!");
    });

    $("#bart").click(function(){
        alert("I didnt do it, Nobody saw me do it You cant prove anything");
    });

    $("#ned").click(function(){
        alert("Ned Flanders Huh, looks like Heaven is easier to get into than Arizona State.");
    });

    $("#mr-burns").click(function() {
        alert("Release the hounds!")
    });

    $("#marge").click(function(){
        alert("Now it's Marge's time to shine!");
    });

    $("#nuclear").click(function() {
        $("#profile-picture").attr("src", "http://www.heyuguys.com/images/2010/01/nuclear-mushroom-cloud.jpg");
    });

    $("#moes-bar").click(function() {
        $("#profile-picture").attr("src", "http://vignette3.wikia.nocookie.net/simpsons/images/f/f7/Duff_Beer.png/revision/latest?cb=20130915031534")
    });
});
