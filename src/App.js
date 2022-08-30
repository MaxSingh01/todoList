import "./App.css";
import { useState } from "react";
import TodoFom from "./components/TodoFom";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const editTodo = todos.find((t) => t.id === editId);
      const updatedTodo = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodo);
      setEditId(0);
      setTodo("");
      return;
    }
    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };
  const handleDelete = (id) => {
    let filterTodos = todos.filter((t) => t.id !== id);
    setTodos([...filterTodos]);
    console.log(todos);
  };
  const handleEdit = (id) => {
    const editTodo = todos.find((t) => t.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="todo-box">
          <h2 className="heading">Todo List</h2>
          {/* todo input field and button */}
          <TodoFom
            handleSubmit={handleSubmit}
            todo={todo}
            setTodo={setTodo}
            editId={editId}
          />

          {/* todo list */}
          <TodoList
            todos={todos}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
