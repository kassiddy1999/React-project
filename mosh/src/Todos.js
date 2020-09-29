import React from 'react'
// import the todos and deleteTodo props from App.js
const Todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
// loop through the todos items
        todos.map(todo => {
            return (
                <div className = "collection-item" key = { todo.id }>
                <span onClick = { () => { deleteTodo(todo.id)} }> { todo.content } </span>
                </div>
            )
        })
    ) : (
        <p className = "center"> You have no todo's left</p>
    )
    return (
        <div className = "todos collection">
            { todoList }
        </div>
    )
}

export default Todos
