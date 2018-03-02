var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp((mobile|student));
var t = 'wt-bank.com';

if (t.match(regex)) {
  alert("Successful match");
} else {
  alert("No match");
}
