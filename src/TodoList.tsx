import React from 'react';
import {v1} from "uuid";

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

export type TodoListType = {
    tasks: TasksType[]
    title: string
    RemoveTasks: (id: string) => void
    AddTasks: (title:string) => void
}


function TodoList(props: TodoListType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button onClick={()=>{props.AddTasks('new')}}>+</button>
            </div>
            <ul>
                {props.tasks.map((t) => {
                    return (
                        <li key={v1()}><input type="checkbox" checked={t.isDone}/> <span>{t.title}</span>
                        <button onClick={()=>{props.RemoveTasks(t.id)}}>x</button>
                        </li>
                    )
                })
                }
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}


export default TodoList