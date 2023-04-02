var h1 = document.getElementById("number");
var number = parseInt(h1.innerText.toString());
var counterButton = document.getElementById("counter");

counterButton.addEventListener("click", function () {
  h1.innerText = ++number;
});
