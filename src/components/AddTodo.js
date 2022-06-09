import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert(" Title or Description should Not be blank!");
        }

        addTodo(title, desc);
    }
    return (
        <div className='addtodo'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Add Todo</h2>
                        <div className="addtodoformsec py-4">
                            <form className='addtodoform' onSubmit={submit}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title: </label>
                                    <input type="text" value={title} className="form-control" onChange={(e)=>{settitle(e.target.value)}} id="title" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="desc" className="form-label">Descriptions: </label>
                                    <input type="text" value={desc} className="form-control" onChange={(e)=>{setdesc(e.target.value)}} id="desc" />
                                </div>
                                <button type="submit" className="btn btn-primary">Add Todo</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
