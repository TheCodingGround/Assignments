window.addEventListener("load", function(event) {
  console.log("loaded");
  var div = document.createElement("div");

  var cookie = getCookie("test")

  div.innerHTML = cookie; //NOTE: This returns all cookies and you will need to split to get the right one

  document.body.appendChild(div);
});

//https://stackoverflow.com/questions/10730362/get-cookie-by-name
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
