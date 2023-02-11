import React from 'react';

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

export type TodoListType = {
    tasks: TasksType[]
    title: string
}


function TodoList(props: TodoListType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((t) => {
                    return (
                        <li><input type="checkbox" checked={t.isDone}/> <span>{t.title}</span>
                        <button>x</button>
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