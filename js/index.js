// checking code 
const manageTasks = new taskManager();
const taskHtml = createTaskHtml('name, description, assignedTo, dueDate, status');

// console.log(taskHtml);
// console.log(taskManager);

// 4.4
const newTask = document.getElementById("newTask").addEventListener("click", function(event) {
  event.preventDefault();
})