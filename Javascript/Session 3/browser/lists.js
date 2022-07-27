
/**
 * ADD AN EVENT LISTENER TO A INPUT ELEMENT AND
 * UPDATE AN UNORDERED LIST WITH FORM INPUT
 */

// GET EXISTING DOM NODES
var input = document.getElementById("add-item");
var addButton = document.getElementById("add-button");
var unorderedList = document.getElementById("shopping-list");

// EVENT TO ADD ITEMS TO A LIST
addButton.addEventListener("click", function (event) {
  event.preventDefault();
  let listItem = document.createElement("li");
  let text = document.createTextNode(input.value);
  unorderedList.appendChild(listItem);
  listItem.appendChild(text);
  input.value = "";
});