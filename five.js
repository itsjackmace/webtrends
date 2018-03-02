$(".slider-copy h2").click(function(){
  alert("title clicked");
});

$(".slider-copy h2").dblclick(function(){
  alert("title double clicked");
});

$(window).keypress(function(){
  alert("key pressed");
});

$(window).resize(function(){
  alert("window resized");
});

$(document).ready(function(){
  alert("page is ready");
});
