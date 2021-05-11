// import React from 'react'
// export default function TodoList({todos, completeTodo, deleteTodo}) {
// return (
// <ul>
// {
// todos.map((tbl_hocsinh) => (
// <li key={tbl_hocsinh._id}>
// {+tbl_hocsinh.completed ? <strike>{tbl_hocsinh.name}</strike> : tbl_hocsinh.name}
// <div className="btn-groups">
// <button className="complete" onClick={() => completeTodo(tbl_hocsinh._id)}>{+tbl_hocsinh.completed ? 'Rework' : 'Complete'}</button>
// <button className="delete" onClick={() => deleteTodo(tbl_hocsinh._id)}>Delete</button>
// </div>
// </li>
// ))
// }
// </ul>
// );
// }




import React from 'react'

export default function TodoList({todos, completeTodo, deleteTodo}) {
  return (
    <ul>
      {
        todos.map((todo) => (
          <li key={todo.id}>
            {+todo.completed ? <strike>{todo.content}</strike> : todo.content}
            <div className="btn-groups">
              <button className="complete" onClick={() => completeTodo(todo._id)}>{+todo.completed ? 'Rework' : 'Complete'}</button>
              <button className="delete" onClick={() => deleteTodo(todo._id)}>Delete</button>
            </div>
          </li>
        ))
      }
    </ul>
  );
}