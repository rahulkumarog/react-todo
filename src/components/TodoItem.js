import React from 'react'

export const TodoItem = (props) => {
    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item mb-3">
                    <div className="sno">{props.todo.sno}</div>
                    <h3>{props.todo.title}</h3>
                    <p>{props.todo.desc}</p>
                    <button type="button" className="btn btn-sm btn-primary">Delete</button>
                </li>
            </ul>
        </div>
    )
}
