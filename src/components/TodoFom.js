import React from "react";

const TodoFom = ({handleSubmit,todo,editId,setTodo}) => {
  return (
    <form className="todo-input-box" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-field"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="btn" type="submit">
        {editId ? "Edit" : "Go"}
      </button>
    </form>
  );
};

export default TodoFom;
