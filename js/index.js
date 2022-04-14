// checking code 
const manageTasks = new taskManager;
const taskHtml = createTaskHtml('name, description, assignedTo, dueDate, status');

// console.log(taskHtml);
// console.log(taskManager);

// 4.4
const newTaskForm = document.querySelector('#newTaskForm');

// event listener when form submitted 
newTaskForm.addEventListener("submit", (event) => {
  // prevent default action
  event.preventDefault();

  taskManager.addTask(name, description, assignedTo, dueDate);

  // 6.2
  const newTaskNameInput = document.querySelector('#newTaskNameInput');
  const newTaskDescription = document.querySelector('#newTaskDescription').value;
  const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo').value;
  const newTaskDueDate = document.querySelector('#newTaskDueDate').value;

  const name = newTaskNameInput.value;
  const description = newTaskDescription.value;
  const assignedTo = newTaskAssignedTo.value;
  const dueDate = newTaskDueDate.value;

  // 6.3
  taskManager.render();

  // 4.4.4 clear sections
  newTaskNameInput.value = '';
  newTaskDescription.value = '';
  newTaskAssignedTo.value = '';
  newTaskDueDate.value = '';
});

// 7.2.1
let tasksofLists = document.querySelector('#tasksLists');

// 7.2.4 and 7.2.5
tasksofLists.addEventListener('click', (event) => {
  if(element.classList.contains('done-button')) {
    // 7.6.7 DOM traversal 

    // parent task
    const parentTask = event.target.parentElement.parentElement;

    // taskId of the parent Task 
    const taskId = Number(parentTask.dataset.taskId);

    // retrieve task from TaskManager
    const task = taskManager.getTaskById(taskId);

    task.status = 'DONE' ;

    taskManager.render();
  }
});

function validFormFieldInput(data){
  return data !== null && data !== '';
}  




