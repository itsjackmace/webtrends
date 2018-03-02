$.fn.exchangePositionWith = function(selector) {
    var other = $(selector);
    this.after(other.clone());
    other.after(this).remove();
};

$("ul#nav li:eq(0)").exchangePositionWith("ul#nav li:eq(5)");

$("ul#nav #menu-item-19 a").click(function(){
  alert("home link clicked");
});
