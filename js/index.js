// checking code 
const manageTasks = new taskManager(0);
const taskHtml = createTaskHtml('name, description, assignedTo, dueDate, status');

// console.log(taskHtml);
// console.log(taskManager);

// 4.4
const newTaskForm = document.querySelector('#newTaskForm');

// event listener when form submitted 
newTaskForm.addEventListener('submit', (event) => {
  // 4.4.3 - prevent default action
  event.preventDefault();

  // inputs
  const newTaskNameInput = document.querySelector('#newTaskNameInput');
  const newTaskDescription = document.querySelector('#newTaskDescription');
  const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
  const newTaskDueDate = document.querySelector('#newTaskDueDate');

  // values of inputs
  const name = newTaskNameInput.value;
  const description = newTaskDescription.value;
  const assignedTo = newTaskAssignedTo.value;
  const dueDate = newTaskDueDate.value;

  // 4.4.3
  taskManager.addTask(name, description, assignedTo, dueDate);

  // 4.4.4
  newTaskNameInput.value = '';
  newTaskDescription.value = '';
  newTaskAssignedTo.value = '';
  newTaskDueDate.value = '';
});

// 5.3