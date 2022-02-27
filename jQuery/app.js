// // alert("hi");
// $(document).ready(function(){
// $("h1").css("color", "red");
// $("button").html("<em>Click Me!</em>");
// $("h1").css("font-size", "50px");
// $("h1").css("font-family", "Arial");
// $("h1").css("text-align", "center");
// $("h1").css("margin-top", "100px");
// $("h1").css("margin-bottom", "100px");
// $("h1").css("background-color", "yellow");
// $("h1").css("border", "5px solid black");
// $("h1").css("border-radius", "10px");
// $("h1").css("padding", "10px");
// $("h1").css("box-shadow", "10px 10px 10px black");
// $("h1").css("text-shadow", "10px 10px 10px black");
// $("h1").css("font-weight", "bold");
// $("h1").css("font-style", "italic");
// $("h1").css("text-decoration", "underline");
// $("h1").css("text-decoration-color", "red");
// $("h1").css("text-decoration-style", "dotted");
// $("h1").css("text-decoration-width", "5px");
// $("h1").css("text-decoration-color", "red");
// $("h1").css("text-decoration-style", "dotted");
// $("h1").css("text-decoration-width", "5px");
// $("h1").css("text-decoration-color", "red");
// $("h1").addClass("myClass");
// $("h1").removeClass("myClass");
// $("h1").toggleClass("myClass");
// $("h1").hasClass("myClass");
// // $("img").("src", "https://animetreasury.com/wp-content/uploads/2020/06/touka-696x851.jpghttps://animetreasury.com/wp-content/uploads/2020/06/touka-696x851.jpg
// ");
// });
$("button").click(function(){$("h1").css("color", "red");});
$(document).keypress(function(event){
    $("h1").text(event.key);
$("document").keypress(function(){$("h1").text(event.key);});
    // $("p").hide();
    $("p").toggle();

});