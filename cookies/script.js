window.addEventListener("load", function(event) {
  console.log("loaded");
  var div = document.createElement("div");
  div.innerHTML = document.cookie; //NOTE: This returns all cookies and you will need to split to get the right one
  document.body.appendChild(div);
});
