// TASK 4 
document.getElementById("newTaskForm").addEventListener("submit", function() {
    addTask.preventDefault();
      const name = document.querySelector("#name").value;
      const description = document.querySelector("#description").value;
      const assignedTo = document.querySelector("#assignedTo").value;
      const dueDate = document.querySelector("#dueDate").value;
      const status = 'TODO';

    // TASK 6 - ERROR ALERT MESSAGE
    if (name.length === 0 || description.length === 0 || assignedTo.length === 0 || dueDate.length === 0){
        console.log('Please fill out all fields!');
          const myAlert = document.getElementById('alertMe');
          myAlert.style.display = 'block';
        } else {
        console.log('All fields filled!');
          const myAlert = document.getElementById('alertMe');
          myAlert.style.display = 'none';
          newTaskVar.addTask();

        // TASK 5
          newTaskVar.render();  
        } 
});

// TASK 6
function validFormFieldInput(data) {
    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const name = newTaskNameInput.value;
    console.log("name:  "+name);
};

// TASK 7 
const listOfTasks = document.querySelector('#tasksList');

// Checking for "mark as done" in tasks 
tasksList.addEventListener('click', (event) => {
    if (event.target.classList.contains('done-button')) {
        // transverse DOM for parent task
        const parentTask = event.target.parentElement;
        const taskId = Number(parentTask.dataset.taskId);

        // getting tasks using the taskId
        const task = newTaskVar.getTaskById(taskId);

        // Update status to 'done'
        task.status = 'DONE';

        // render task
        newTaskVar.render();
    }
});

















