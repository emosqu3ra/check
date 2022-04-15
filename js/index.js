// initializing taskmanager and ability to add inputted fields to correct locations in form 
const manageTasks = new taskManager(0);
const taskHtml = createTaskHtml('name, description, assignedTo, dueDate, status');

// console.log(taskHtml);
// console.log(taskManager);

// Load the tasks from localStorage
manageTasks.load();

// Render the tasks to the page
manageTasks.render();

// 4.4
const newTaskForm = document.querySelector('#newTaskForm');

// event listener when form submitted > looks to match what was submitted with the html of the form
newTaskForm.addEventListener('submit', (event) => {
  // prevent default action
  event.preventDefault();
      // 6.2  makes sure the inputted data goes to the correct form fields 
    const newTaskNameInput = document.querySelector('#newTaskNameInput').value;
    const newTaskDescription = document.querySelector('#newTaskDescription').value;
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo').value;
    const newTaskDueDate = document.querySelector('#newTaskDueDate').value;

    const name = newTaskNameInput;
    const description = newTaskDescription;
    const assignedTo = newTaskAssignedTo;
    const dueDate = newTaskDueDate;
  
  // verifies that the user is filling in all the required fields correctly and if they do starts storing it  
  if (name.length === 0 || description.length === 0 || assignedTo.length === 0 || dueDate.length === 0) {
    console.log('All fields but be filled!')} else {
      manageTasks.addTask(name, description, assignedTo, dueDate);
      manageTasks.render();
      manageTasks.save();
    }
  // 4.4.4 clear sections
  newTaskNameInput.value = '';
  newTaskDescription.value = '';
  newTaskAssignedTo.value = '';
  newTaskDueDate.value = '';
});

// 7.2.1
const tasksofLists = document.querySelector('#tasksLists');

// 7.2.4 and 7.2.5
tasksofLists.addEventListener('click', (event) => {
  if(event.target.classList.contains('done-button')) {
    // 7.2.6 DOM traversal 
    const parentTask = event.target.parentElement.parentElement;
    // console.log(parentTask);
    // 7.5.2
    const taskId = Number(parentTask.dataset.taskId);
    // 7.5.3
    const task = manageTasks.getTaskById(taskId);
    task.status = 'DONE';
    manageTasks.render();
  }
});







