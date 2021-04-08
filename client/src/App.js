import React, { Fragment } from "react";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import EditTodo from "./components/EditTodo";
import DeleteTodo from "./components/DeleteTodo";
import FilterTodos from "./components/FilterTodos";

function App() {
  return (
    <Fragment>
      <InputTodo />
      <ListTodos />
      <EditTodo />
      <DeleteTodo />
      <FilterTodos />
    </Fragment>
  );
}

export default App;
