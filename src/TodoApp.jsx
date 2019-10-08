import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Toolbar } from "@material-ui/core";

import useTodoState from "./hooks/useTodoState";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  const initTodos = JSON.parse(window.localStorage.getItem("todos") || "[] ");
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initTodos
  );
  // const initTodos = [
  //   { id: 1, task: "feed cat", completed: false },
  //   { id: 2, task: "code", completed: true },
  //   { id: 3, task: "shopping", completed: false }
  // ];
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#fafafa"
        }}
        elevation={0}
      >
        <AppBar color="primary" position="static" style={{ height: "64px" }}>
          <Toolbar>
            <Typography color="inherit">Todos with hook</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" style={{ marginTop: "1rem" }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo}></TodoForm>
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            ></TodoList>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default TodoApp;
