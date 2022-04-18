// initializing taskManager and ability to add inputted fields to correct locations in form 
const manageTasks = new taskManager();

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
    let newTaskNameInput = document.querySelector('#newTaskNameInput');
    let newTaskDescription = document.querySelector('#newTaskDescription');
    let newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    let newTaskDueDate = document.querySelector('#newTaskDueDate');

    const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;
  
  // verifies that the user is filling in all the required fields correctly and if they do starts storing it  
  if (name.length === 0 || description.length === 0 || assignedTo.length === 0 || dueDate.length === 0) {
    console.log('All fields but be filled!');
    // 6.3.3 display bootstrap alert if fields are blank
    const alertEd = document.getElementById('anAlert');
    alertEd.style.display = 'block';
  } else {
    // 6.3.4 hide bootstrap alert if fields are blank
    const alertEd = document.getElementById('anAlert');
    alertEd.style.display = 'none';
    manageTasks.addTask(name, description, assignedTo, dueDate);
    manageTasks.render();
    manageTasks.save();
    newTaskNameInput.value = '';
    newTaskDescription.value = '';
    newTaskAssignedTo.value = '';
    newTaskDueDate.value = '';
  }  
});

// 7.2.1
const tasksOfLists = document.querySelector('#tasksLists');

// 7.2.4 and 7.2.5 marks task as done once the button has been clicked in created tasks
tasksOfLists.addEventListener('click', (event) => {
  if(event.target.classList.contains('done-button')) {
    // 7.2.6 DOM traversal identifies the elements of the new task
    const parentTask = event.target.parentElement;
    console.log(parentTask);
    // 7.5.2 gives an id to each new task, converts the string to numerals 
    const taskId = Number(parentTask.dataset.taskId);
    // 7.5.3
    const task = manageTasks.getTaskById(taskId);
    task.status = 'DONE';
    manageTasks.render();
  }
  // 9.3 looks to see if delete button is clicked to remove form from page *repeat of mark as done
  if(event.target.classList.contains('delete-button')) {
    const parentTask = event.target.parentElement;
    const taskId = Number(parentTask.dataset.taskId);
    
    manageTasks.deleteTask(taskId);
    manageTasks.save();
    manageTasks.render();
  }
});








