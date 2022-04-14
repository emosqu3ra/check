// 5.1 
function createTaskHtml (name, description, assignedTo, dueDate, status) {
  // 5.1.2
  const html = `<li>
  <div class="container">
    <h1 class="my-5">Task List</h1>
    <div class="row">
        <div class="col">
            <h2>New Task</h2>
            <form id="newTaskForm">
                <div class="form-group">
                    <label for="newTaskNameInput">${name}</label>
                    <input type="text" class="form-control" id="newTaskNameInput">
                </div>
                <div class="form-group">
                    <label for="newTaskDescription">${description}</label>
                    <textarea type="text" class="form-control" id="newTaskDescription"></textarea>
                </div>
                <div class="form-row">
                    <div class="form-group col">
                        <label for="newTaskAssignedTo">Assigned To: ${assignedTo}</label>
                        <input type="text" class="form-control" id="newTaskAssignedTo">
                    </div>
                    <div class="form-group col">
                        <label for="newTaskDueDate">Due Date: ${dueDate}</label>
                        <input type="date" class="form-control" id="newTaskDueDate">
                    </div>
                    <div class="form-row">
                    <div class="form-group col">
                        <label for="newTaskStatus">Status: ${status}</label>
                        <input type="text" class="form-control" id="newTaskStatus">
                    </div>
                  </div>  
                </div>
                <button type="submit" class="btn btn-primary btn-block">Add Task</button>
            </form>
        </div>
    </div>
  </div>
</li>`
;
// 5.1.4
return html;
}

// 4.2 
class taskManager {
  // 4.3.1
  constructor() {
    this.tasks = [];
    this.currentId = 0;
  }
  get taskList() {
    return this.tasks
  }

  // 4.3.3 
  addTask(name, description, assignedTo, dueDate, status = 'TODO') {
    const newTask = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status
    }
    // 4.3.5
    this.tasks.push(newTask);
  }
  // 5.2.1
  render() {
    // 5.2.2
    let tasksHtmlList = [];
    // 5.2.3
    for (let i = 0; i < this.tasks.length; i++) {
      // 5.2.3.i
      let task = this.tasks[i];
      // 5.2.3.ii
      let newDate = new Date(task.dueDate);
      // 5.2.3.iii
      let formattedDate = currentDate.toDateString();
      // 5.2.3.iv
      let taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status);
      // 5.2.3.v
      tasksHtmlList.push(taskHtml);
    }
    // 5.2.4
    const tasksHtml = tasksHtmlList.join('\n');
    // ******************************5.2.5 and 6
    document.getElementById('#tasksLists').innerHTML = tasksHtmlList;
  }
}