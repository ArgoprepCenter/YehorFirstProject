let button = document.getElementById("garlic-noodle");
button.onclick = function(){
    modal.style.display = "block";
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
let asianPastaRecipeElement = document.getElementById("asian-pasta-recipe");

asianPastaRecipeElement.innerHTML = "Prep - 10 minutes mins<br />"+
                                    "Cook - 15 minutes mins<br />"+
                                    "Total - 25 minutes mins<br />"+
                                    "Ingredients<br />"+
                                    "1. 8 oz angel hair pasta<br />"+
                                    "2. 4 cloves garlic<br />"+
                                    "3. 1/2 bunch green onions<br />"+ 
                                    "4. 4 Tbsp butter<br />"+
                                    "5. 2 tsp soy sauce<br />"+ 
                                    "6. 2 Tbsp brown sugar<br />"+
                                    "7. 1 tsp sesame oil<br />"+
                                    "8. 2 Tbsp oyster sauce<br />";
