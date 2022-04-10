//Ronisha Task 5//
const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => `
    <li class="list-group-item" data-task-id=${id}>
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge ${status === 'TODO' ? 'badge-danger' : 'badge-success'}">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
        </div>
        <p>${description}</p>
        <div class="d-flex w-100 justify-content-end">
            <button class="btn btn-outline-success done-button mr-1 ${status === 'TODO' ? 'visible' : 'invisible'}">Mark As Done</button>
            <button class="btn btn-outline-danger delete-button">Delete</button>
        </div>
    </li>
`;



//Task 4 Alex making TaskManager Class

class TaskManager {

    constructor(currentId = 0) {
      this.tasks = [];
      this.currentId = currentId;
    }
  
    addTask(name, description, assignedTo, dueDate, status) {
        
        this.name = name;
        this.description = description;
        this.assignedTo = assignedTo;
        this.dueDate = dueDate;
        this.status = status;
        id: this.currentId++;
    }

    this.tasks.push(task);

  }

  //End of Alex's TaskManager Class section


// Estephanie Task 7


//Ronisha Task 5//
render() {
  const tasksHtmlList = [];

  for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];

      const date = new Date(task.dueDate);
      // const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
      const formattedDate = (date.getMonth() + 1) + '/' + (date.getDate() + 1)  + '/' + date.getFullYear();

      const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);

      tasksHtmlList.push(taskHtml);
  }

  const tasksHtml = tasksHtmlList.join('\n');

  const tasksList = document.querySelector('#tasksList');
  tasksList.innerHTML = tasksHtml;
}