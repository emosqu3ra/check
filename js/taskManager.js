function createTaskHtml(name, description, assignedTo, dueDate, status) {
  const html = `
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

return html;
}

//Task 4 Alex making TaskManager Class

class TaskManager {

    constructor(currentId = 0) {
      this.tasks = [];
      this.currentId = currentId;
    }
  
    addTask(name, description, assignedTo, dueDate, status) {
        const tasks = {
          name: name,
          description: description,
          assignedTo: assignedTo,
          dueDate: dueDate,
          status: status,
          id: this.currentId++
        };

    this.tasks.push(tasks);

  }
  render(){
    const tasksHtmlList = [];
    const taskHtmlVar = tasksHtmlList; 
    for (let i = 0; i < this.tasks.length; i++){
      const task = this.tasks[i];
      const newDate = new Date(task.dueDate);
      // const formattedDate 
  
      const formattedDate = (newDate.getMonth() + 1) + '/' + (newDate.getDate() + 1)  + '/' + newDate.getFullYear();
    
      const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status);
      tasksHtmlList.push(taskHtml);
      console.log(taskHtml);
      console.log(tasksHtmlList);
      for(let i = 0; i < tasksHtmlList.length; i++) {
        document.getElementById("tasksLists").innerHTML = tasksHtmlList;
      }
    }
  }
}