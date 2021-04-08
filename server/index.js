const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const pool = require("./db");

// Middlewares
app.use(express.json());
app.use(cors());

// Routes

// create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "insert into item(description) values($1) returning *;",
      [description]
    );
    res.send(newTodo.rows[0]);
    console.log("New todo created");
  } catch (err) {
    console.log(err.message);
  }
});
// get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("select * from item;");
    res.send(allTodos.rows);
    console.log("GetAll Request");
  } catch (err) {
    console.log(err.message);
  }
});

// get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("select * from item where id=$1;", [id]);
    res.send(todo.rows[0]);
    console.log("Get Request");
  } catch (err) {
    console.log(err.message);
  }
});

// update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updatedTodo = await pool.query(
      "update item set description=$1 where id=$2 returning *;",
      [description, id]
    );
    res.send(updatedTodo.rows[0]);
    console.log(`Todo ${id} updated`);
  } catch (err) {
    console.log(err.message);
  }
});

// delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await pool.query(
      "delete from item where id=$1 returning *;",
      [id]
    );
    res.send(deletedTodo.rows[0]);
    console.log(`Todo ${id} deleted`);
  } catch (err) {
    console.log(err.message);
  }
});

// delete all todos
app.delete("/todos", async (req, res) => {
  try {
    const deletedTodos = await pool.query("delete from item returning *;");
    res.send(deletedTodos.rows);
    console.log(`All todos have been deleted.`);
  } catch (err) {
    console.log(err.message);
  }
});

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
