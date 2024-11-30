let details = ""; 
let recipeDetails = document.getElementById("recipe-details");
let buttonGarlic = document.getElementById("garlic_noodle");
let buttonSoy = document.getElementById("soy_pasta");
let buttonChar = document.getElementById("char_pasta");
let buttonHokkien = document.getElementById("hokkien_mee");
let buttonMee = document.getElementById(" mee_goreng");
let buttonPad = document.getElementById("pad_woon_sen");
let buttonChicken = document.getElementById("Chicken-Chow-Mein");
let buttonDan = document.getElementById("Dan-Dan-Noodles");

buttonGarlic.onclick = function(){
    modal.style.display = "block";
    details = recipes.garlic_noodle;
    recipeDetails.innerHTML = details;
}
buttonSoy.onclick = function(){
  modal.style.display = "block";
  details = recipes.soy_pasta;
  recipeDetails.innerHTML = details;
}
buttonHokkien.onclick = function(){
  modal.style.display = "block";
  details = recipes.char_pasta;
  recipeDetails.innerHTML = details;
}
buttonMee.onclick = function(){
  modal.style.display = "block";
  details = recipes.hokkien_mee;
  recipeDetails.innerHTML = details;
}
buttonPad.onclick = function(){
  modal.style.display = "block";
  details = recipes.mee_goreng;
  recipeDetails.innerHTML = details;
}
buttonChicken.onclick = function(){
  modal.style.display = "block";
  details = recipes.pad_woon_sen;
  recipeDetails.innerHTML = details;
}
buttonDan.onclick = function(){
  modal.style.display = "block";
  details = recipes.asian_pasta;
  recipeDetails.innerHTML = details;
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
