// 5.1 function will allow the user to input and than see values required in task form
function createTaskHtml (id, name, description, assignedTo, dueDate, status) {
  // 5.1.2
  const html = `<li id="tasksLists">
  <div data-task-id="${id}" class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>
      <p class="card-text">Assigned To: ${assignedTo}</p>

      <!-- DUE DATE -->
      <form class="card-text" action="/action_page.php">
        <label for="duedate" class="duedate">Due Date: ${dueDate}</label>
      </form>

      <!-- DONE -->
      <button class="btn btn-outline-success done-button ${status === 'TODO' ? 'visible' : 'invisible'}">Mark As Done
      </button>
    </div>
  </div>
</li>`
;
// 5.1.4
return html;
}

// 4.2 this sets up the ability for the tasks form to start accepting inputs of tasks, having them posted, saving them locally, and than pulling them during new browser sessions
class taskManager {
  // 4.3.1
  constructor(currentId) {
    this.tasks = [];
    this.currentId = 0;
  }
  get taskList() {
    return this.tasks
  }
  // 4.3.3 creating the user interactivity to actually add a task and submit it in browser 
  addTask(name, description, assignedTo, dueDate) {
    const newTask = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: 'TODO'
    }
    // 4.3.5
    // console.log(newTask.status);
    this.tasks.push(newTask);
  }
  // 5.2.1 - appending the created tasks to the current browser section after adding tasks
  render() {
    // 5.2.2
    let tasksHtmlList = [];
    // 5.2.3
    for (let i = 0; i < this.tasks.length; i++) {
      // 5.2.3.i
      let task = this.tasks[i];
      // 5.2.3.ii
      // let newDate = new Date(task.dueDate);
      // // 5.2.3.iii
      // let formattedDate = currentDate.toDateString();
      // 5.2.3.iv
      let taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, task.dueDate, task.status);
      // 5.2.3.v
      tasksHtmlList.push(taskHtml);
    }
    // 5.2.4
    const tasksHtml = tasksHtmlList.join('\n');
    console.log(tasksHtml);
    // 5.2.5 and 6
    document.getElementById('tasksLists').innerHTML = tasksHtml;
  }
  // 7.4.3
  getTaskById(taskId) {
    let foundTask = taskId;
    // 7.4.4
    for (let f=0; f < this.tasks.length; f++) {
      let task = this.tasks[f];
      if (task.id === foundTask) {
        return foundTask;
      }
    }
  }
  // 8.1 - save any tasks completed to the local storage = inspect > application > local storage
  save() {
    let tasksJson = JSON.stringify(this.tasks);
    // 8.1.3
    localStorage.setItem('tasks', tasksJson);
    // 8.1.4
    let currentId = String(this.currentId);
    // 8.1.5
    localStorage.setItem('currentId', currentId);
  }
  // 8.2 - check to see if there are any tasks and load any previous tasks to current browser 
  load() {
    // 8.2.3
    if (localStorage.getItem('tasks')) {
      const tasksJson = localStorage.getItem('tasks');
      // 8.2.4
      this.tasks = JSON.parse(tasksJson);
    }
    // repeat steps to check if there are any currentId in local storage as well 
    if(localStorage.getItem('currentId')) {
      const currentId = localStorage.getItem('currentId');
      this.currentId = Number(currentId);
    }
  }
}