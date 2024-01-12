import React from 'react';
import './App.css'

export const Task= (props)=>{
    return(
        <div className="task"
        style={{backgroundColor:props.completed? "purple": "pink"}}>
            <h1>{props.taskName}</h1>
            <div className='buttons'>
                <button onClick={()=>props.completeTask(props.id)}>Complete</button>
                <button onClick={()=>props.deleteTask(props.id)}> X </button>
            </div>

        </div>
    )
}

