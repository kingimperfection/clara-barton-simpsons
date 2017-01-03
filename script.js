// the following code will make Homer say D'oh! when you click on him!
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
 $("#maggie img").click(function(){
         $("#maggie img").attr("src","https://i.ytimg.com/vi/PcuSG6TAMhA/maxresdefault.jpg");
          });
          
    $("#mr-burns").click(function() {
        alert("Release the hounds!")
    });
    
    $('#donuts').click(function() {
        $('img').attr('src', 'http://images.huffingtonpost.com/2016-05-31-1464712425-4101817-donut_day_deals_and_freebies.jpg');
    });
    // now that you know how to make alerts...
    // create an alert when you click on Bart, Ned, and Maggie
    // use the code above as an exampleie
    $("#nuclear").click(function() {
        $("#profile-picture").attr("src", "http://www.heyuguys.com/images/2010/01/nuclear-mushroom-cloud.jpg");
    })
    $("#moes-bar").click(function() {
        $("#profile-picture").attr("src", "http://vignette3.wikia.nocookie.net/simpsons/images/f/f7/Duff_Beer.png/revision/latest?cb=20130915031534")
    })
    $("#marge").click(function(){
        alert("Now it's Marge's time to shine!");
    });
});
