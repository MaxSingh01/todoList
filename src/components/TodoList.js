import React from "react";

const TodoList = ({ todos, handleEdit, handleDelete }) => {
  return (
    <div className="todo-list-main">
      {todos ? (
        todos.map((t) => (
          <ul className="todo-list-box">
            <span className="todo-list-item item-1" key={t.id}>
              {t.todo}
            </span>
            <button
              className="todo-list-item item-2"
              onClick={() => handleEdit(t.id)}
            >
              Edit
            </button>
            <button
              className="todo-list-item item-2"
              onClick={() => handleDelete(t.id)}
            >
              Delete
            </button>
          </ul>
        ))
      ) : (
        <ul className="todo-list-box">
          <span className="todo-list-item item-1">
            Nothing to display on list
          </span>
        </ul>
      )}
    </div>
  );
};

export default TodoList;
