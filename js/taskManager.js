// 5.1 
function createTaskHtml (name, description, assignedTo, dueDate, status) {
  // 5.1.2
  const html = `<li>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>
      <p class="card-text">${assignedTo}</p>

      <!-- DUE DATE -->
      <form class="card-text" action="/action_page.php">
        <label for="duedate" class="duedate">Due Date:${dueDate}</label>
      </form>

      <!-- STATUS -->
      <span class="badge badge-primary">${status}</span>

      <!-- DONE -->
      <button type="button" class="done-button btn">Mark As Done</button>
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
    console.log(newTask.status);
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
      // let newDate = new Date(task.dueDate);
      // // 5.2.3.iii
      // let formattedDate = currentDate.toDateString();
      // 5.2.3.iv
      let taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, task.dueDate, task.status);
      // 5.2.3.v
      tasksHtmlList.push(taskHtml);
    }
    // 5.2.4
    const tasksHtml = tasksHtmlList.join('\n');
    console.log(tasksHtml);
    // 5.2.5 and 6
    document.getElementById('tasksLists').innerHTML = tasksHtml;
  }
}