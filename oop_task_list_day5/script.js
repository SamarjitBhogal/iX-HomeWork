class Task {
  constructor(taskName) {
    this.taskName = taskName;
  }
}

class UserInterface {
  constructor() {
    this.taskName = document.getElementById("task-input");
    this.tableBody = document.getElementById("table-body");

    this.form = document.getElementById("form");

    this.form.addEventListener("submit", (e) => {
      this.onTaskSubmit(e);
    });

    console.log("ui construct");

    this.tasks = [];
  }

  onTaskSubmit(e) {
    e.preventDefault();

    const task = new Task(this.taskName.value);

    console.log(task);

    this.tasks.push(task);
    this.renderTasks();
  }

  renderTasks() {
    this.tableBody.innerHTML = "";

    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];

      const tableRow = this.generateTaskRow(task);
      this.tableBody.appendChild(tableRow);
    }
  }

  generateTaskRow(task) {
    const tr = document.createElement("tr");

    const cellTask = document.createElement("td");
    const cellCompleted = document.createElement("td");
    const cellActions = document.createElement("td");

    cellTask.innerHTML = task.taskName;

    const checkBox = this.generateCheckBox();
    const removeButton = this.generateRemoveButton(task);
    cellCompleted.appendChild(checkBox);
    cellActions.appendChild(removeButton);

    tr.appendChild(cellTask);
    tr.appendChild(cellCompleted);
    tr.appendChild(cellActions);

    return tr;
  }

  generateCheckBox() {
    const div = document.createElement("div");
    const checkBox = document.createElement("input");

    checkBox.setAttribute("class", "form-check-input");
    checkBox.setAttribute("type", "checkbox");

    div.appendChild(checkBox);

    return div;
  }

  generateRemoveButton(task) {
    const div = document.createElement('div');
    const button = document.createElement("button");
    
    button.innerHTML = 'x';
    button.setAttribute("class", "btn btn-sm btn-primary");
    button.addEventListener("click", (e) => {
        this.onRemoveTask(task);
    });

    div.appendChild(button);

    return div;
  }

  onRemoveTask(task) {
    this.tasks = this.tasks.filter((t) => {
        return t.taskName !== task.taskName;
    });
    this.renderTasks();
  }
}

new UserInterface();
