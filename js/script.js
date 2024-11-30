let button = document.getElementsByClassName("btn");
console.log(button);

for (let item of button) {
    console.log(item.id);
    item.onclick = function() {
        // modal.style.display = "block";
        // details = recipes.asian_pasta;
        // recipeDetails.innerHTML = details;
        recipe_id = item.id;
        recipe_name = recipe_id.replace("-", "_");
        console.log(recipes[recipe_name]);
    }
}