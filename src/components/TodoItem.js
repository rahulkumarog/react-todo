import React from 'react'

export const TodoItem = ({todo}) => {
    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item mb-3">
                    <div className="sno">{todo.sno}</div>
                    <h3>{todo.title}</h3>
                    <p>{todo.desc}</p>
                    <button type="button" className="btn btn-sm btn-primary" onClick={todo.deleteTodo}>
                        Delete
                    </button>
                </li>
            </ul>
        </div>
    )
}
