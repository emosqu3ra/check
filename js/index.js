// checking code 
const manageTasks = new taskManager;
const taskHtml = createTaskHtml('name, description, assignedTo, dueDate, status');

// console.log(taskHtml);
// console.log(taskManager);

// 4.4
const newTaskForm = document.querySelector('#newTaskForm');

// event listener when form submitted 
newTaskForm.addEventListener('submit', (event) => {
  // prevent default action
  event.preventDefault();
      // 6.2  
    const newTaskNameInput = document.querySelector('#newTaskNameInput').value;
    const newTaskDescription = document.querySelector('#newTaskDescription').value;
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo').value;
    const newTaskDueDate = document.querySelector('#newTaskDueDate').value;
    const newTaskStatus = document.querySelector('#newTaskStatus').value;

    const name = newTaskNameInput;
    const description = newTaskDescription;
    const assignedTo = newTaskAssignedTo;
    const dueDate = newTaskDueDate;
    const status = newTaskStatus;

  if (name.length === 0 || description.length === 0 || assignedTo.length === 0 || dueDate.length === 0) {
    console.log('All fields but be filled!')} else {
      manageTasks.addTask(name, description, assignedTo, dueDate, status);
      // 5.3
      manageTasks.render();
    }
  // 4.4.4 clear sections
  newTaskNameInput.value = '';
  newTaskDescription.value = '';
  newTaskAssignedTo.value = '';
  newTaskDueDate.value = '';
  newTaskStatus.value = '';
});

// 7.2.1
const tasksofLists = document.querySelector('#tasksLists');

// 7.2.4 and 7.2.5
tasksofLists.addEventListener('click', (event) => {
  if(event.target.classList.contains('done-button')) {
    // 7.2.6 DOM traversal 
    const parentTask = event.target.parentElement.parentElement;
    console.log(parentTask);
    // 7.5.2
    const taskId = Number(parentTask.dataset.taskId);
    // 7.5.3
    const task = manageTasks.getTaskById(taskId);
    task.status = 'DONE';
    manageTasks.render();
  }
});







