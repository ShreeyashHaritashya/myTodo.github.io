//Inputing value in To-Do list
$("input[type='text']").keypress(function (event){
  if (event.which === 13) {
    //grabbing new todo text from input
    var inputText = $(this).val();
    // to clear input field
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+inputText+"</li>");
  }
})

//Check off specific todo when clicked
//$("li").click(function() { will not work for newly add tags
$("ul").on("click","li", function() {
  /*
  //if li is gray turn it black
  if ($(this).css("color") === "rgb(128, 128, 128)") {
    $(this).css({
      color: "black",
      textDecoration: "none"
    });
  }
  //else turn it gray
  else {
    $(this).css({
      color: "gray",
      textDecoration: "line-through"
    });
  }*/
  //above lines can be achived in just one line
  $(this).toggleClass("completed");
});

$("ul").on("click","span",function (event) {
  event.stopPropagation();//to stop event bubbleing
  $(this).parent().fadeOut(500,function() {
    $(this).remove();
  })
})

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
})
