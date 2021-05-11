// import React, { Component } from "react";
// import axios from "axios";
// import AddTodo from "./AddTodo";
// import TodoList from "./TodoList";
// import "./App.css";
// const API_URL = "http://localhost:8000";
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: [],
//     };
//     this.completeTodo = this.completeTodo.bind(this);
//     this.deleteTodo = this.deleteTodo.bind(this);
//     this.createTodo = this.createTodo.bind(this);
//   }
//   componentDidMount() {
//     axios.get(`${API_URL}/home`).then((response) => {
//       this.setState({
//         todos: response.data.tbl_hocsinh,
//       });
//     });
//   }
//   deleteTodo(_id) {
//     axios.post(`${API_URL}/delete`, { _id }).then(() => {
//       const todos = this.state.todos.filter((todo) => todo._id !== _id);
//       console.log(todos);
//       this.setState({ todos });
//     });
//   }
//   completeTodo(_id) {
//     axios.post(`${API_URL}/complete`, { _id }).then(() => {
//       const todos = this.state.todos.map((todo) => {
//         if (todo._id === _id) {
//           todo.completed = !todo.completed;
//         }
//         return todo;
//       });
//       this.setState({ todos });
//     });
//   }
//   createTodo(name) {
//     const todo = { name };
//     axios.post(`${API_URL}/create`, todo).then((response) => {
//       const todos = this.state.todos.concat([response.data.todo]);
//       this.setState({ todos });
//     });
//   }
//   render() {
//     return (
//       <div className="App">
//         <AddTodo createTodo={this.createTodo} />
//         <TodoList
//           todos={this.state.todos}
//           completeTodo={this.completeTodo}
//           deleteTodo={this.deleteTodo}
//         />
//       </div>
//     );
//   }
// }
// export default App;
"use strict";