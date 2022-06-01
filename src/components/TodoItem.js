import React from 'react'

export const TodoItem = (props) => {
    return (
        <div>
            <ul class="list-group">
                <li class="list-group-item">
                    <p>{props.todo.sno}</p>
                    <h3>{props.todo.title}</h3>
                    <p>{props.todo.desc}</p>
                    <button type="button" class="btn btn-sm btn-primary">Primary</button>
                </li>
            </ul>
        </div>
    )
}
