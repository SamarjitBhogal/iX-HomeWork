import React from "react";

export default function TaskTable(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((task) => (
            //   we need to have a unique id otherwise we dont know what row to update
            <tr key={task.id}>
              <td>{task.name}</td>
              <td onClick={(e) => props.onToggleComplete(task.id)}>
                <i
                  className={
                    task.complete ? "bi bi-circle-fill" : "bi bi-circle"
                  }
                ></i>
              </td>
              <td>
                <i
                  className="bi bi-trash-fill"
                  onClick={(e) => props.onRemoveTask(task.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
