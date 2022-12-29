const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const newArray = [];
const list = document.querySelector("#ingredients");
//===================================

ingredients.forEach(function (number, i) {
    const list_li = document.createElement("li");
    list_li.classList.add("item");
    list_li.textContent = ingredients[i];
    newArray.push(list_li);
});
list.append(...newArray);
