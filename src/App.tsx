import React, {useState} from 'react';
import './App.css';
import TodoList, {TasksType, TodoListType} from "./TodoList";
import {v1} from "uuid";


export type FilterTasks = 'all' | 'completed' | 'active'

function App() {

    let [tasks, setTasks] = useState<TasksType[]>([
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'WFT', isDone: false}
    ])

    let [filter, setFilter] = useState<FilterTasks>('all')

    let FilterTasks = (value: FilterTasks) => {
        setFilter(value)
    }

    const RemoveTasks = (id: string) => {
        let deleteTask = tasks.filter(t => t.id !== id)
        setTasks(deleteTask)
    }

    const ChangeStatus = (taskId:string, isDone: boolean) => {
      let task =  tasks.find(t=> t.id === taskId)
        if(task){
        task.isDone = isDone
        }
        setTasks(tasks)
    }

    const AddTasks = (title: string) => {
        let task = {id: v1(), title: title, isDone: true}
        let NewTasks = [task, ...tasks]
        setTasks(NewTasks)
    }

    let FilteredTask = tasks
    if (filter === 'completed') {
        FilteredTask = tasks.filter(t => t.isDone === true)
    }
    if (filter === 'active') {
        FilteredTask = tasks.filter(t => t.isDone === false)
    }


    return (
        <div className="App">
            <TodoList
                title={'WTF'}
                tasks={FilteredTask}
                RemoveTasks={RemoveTasks}
                AddTasks={AddTasks}
                FilterTasks={FilterTasks}
                ChangeStatus={ChangeStatus}
            />
        </div>
    );
}

export default App;
