$(document).ready(function() {

//Array of strings saved to a variable called 'topics'
var topics = ["Pizza", "Panda", "Coding", "Monkey", "Koala", "Dog", "Bird", "Ferret", "Cat"];    const theme = new Audio("assets/got-theme-song.mp3");
//var giphyURL = "https://api.giphy.com/v1/gifs/trending?api_key=FksXZxJtNgMhBh9yoAtA6sJfP13eNyd4";
   
// MAKE BUTTONS
    
function makeButtons() {
    
    $("#got-buttons").empty();
        for (i = 0; i < topics.length; i++) {
                
        var b = $("<button>");
    
        b.addClass("character-btn");
        b.attr("data-name", topics[i]);
        b.text(topics[i]);
    
        $("#got-buttons").append(b);
    };
};
