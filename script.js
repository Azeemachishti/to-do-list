// Get the input field and button
var newItem = document.getElementById("newItem");
var addItem = document.getElementById("addItem");



// When the user clicks on the button, add the new item to the list
addItem.addEventListener("click", function() {
  var todoList = document.getElementById("todoList");
  var li = document.createElement("li");
  li.innerHTML = newItem.value;
  todoList.appendChild(li);
  newItem.value = "";
});

// When the user clicks on the delete button, remove the item from the list
document.addEventListener("click", function(event) {
  if (event.target && event.target.matches("li button")) {
    event.target.parentNode.remove();
  }
});



