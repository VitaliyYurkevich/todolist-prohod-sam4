import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {v1} from "uuid";
import {FilterTasks} from "./App";

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

export type TodoListType = {
    tasks: TasksType[]
    title: string
    RemoveTasks: (id: string) => void
    AddTasks: (title: string) => void
    FilterTasks: (value: FilterTasks) => void
    ChangeTaskStatus: (taskId:string, isDone: boolean) => void
}


function TodoList(props: TodoListType) {

    const [NewTaskTitle, setNewTaskTitle] = useState('')
    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)

    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            props.AddTasks(NewTaskTitle)
            setNewTaskTitle('')
        }

    }
    const addTask = () => {
        props.AddTasks(NewTaskTitle)
        setNewTaskTitle('')

    }
    const onAllClickHandler = () => {
        props.FilterTasks('all')
    }
    const onActiveClickHandler = () => {
        props.FilterTasks('active')
    }
    const onCompletedClickHandler = () => {
        props.FilterTasks('completed')
    }



    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={NewTaskTitle}
                       onChange={onNewTitleChangeHandler}
                       onKeyPress={onKeyPressHandler}
                />

                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {props.tasks.map((t) => {
                    const onRemoveHandler = () => {
                        props.RemoveTasks(t.id)
                    }
                    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
                        props.ChangeTaskStatus(t.id, e.currentTarget.checked)
                        console.log(t.id + e.currentTarget.checked)
                    }
                    return (
                        <li key={v1()}>
                            <input type="checkbox"
                                   onChange={onChangeHandler}
                                   checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={onRemoveHandler}>x
                            </button>
                        </li>
                    )
                })
                }
            </ul>
            <div>
                <button onClick={onAllClickHandler}>All
                </button>
                <button onClick={onActiveClickHandler}>Active
                </button>
                <button onClick={onCompletedClickHandler}>Completed
                </button>
            </div>
        </div>
    )
}


export default TodoList