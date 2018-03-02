var setCookie = function (name, value) {
            var date = new Date(),
                expires = 'expires=';
            date.setTime(date.getTime() + 10);
            expires += date.toGMTString();
            document.cookie = name + '=' + value + '; ' + expires + '; path=/';
        }

setCookie("card","many");

function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

deleteCookie("card");

var tpcookie = function() {
  var xhr = new XMLHttpRequest();
  var authUrl= "http://www.tpdomain.com/cookie"
  xhr.addEventListener("load", reqListener);
  xhr.open("POST", authUrl, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.withCredentials = true;
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      debugger;
      // I'm not seeing anything in xhr.request
    }
  }
  var reqListener = function() {
    debugger;
  }
}

tpcookie();
