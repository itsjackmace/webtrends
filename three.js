var nav = new Array(document.getElementById("nav").getElementsByTagName("li"));
var home = document.getElementById("nav").getElementsByTagName("li")[0];

nav.push(nav.shift());

home.onclick = function(){alert("home link clicked");}
