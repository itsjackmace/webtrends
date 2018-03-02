var home = document.getElementById("menu-item-19").getElementsByTagName("a")[0];

home.style.color = "#ff0000";
home.style.textDecoration = "underline";
home.onmouseover = function(){this.style.color = "#0000ff"};
home.onmouseout = function(){this.style.color = "#ff0000"};
