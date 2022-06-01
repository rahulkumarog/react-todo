import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div>
        <section className="todo-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className='mb-4'>Our Todo List</h2>
                    </div>
                    <div className="col-12">
                        
                        <TodoItem
                            todo={props.todolist[0]}
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
