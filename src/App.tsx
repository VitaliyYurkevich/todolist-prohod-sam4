import React, {useState} from 'react';
import './App.css';
import TodoList, {TasksType, TodoListType} from "./TodoList";
import {v1} from "uuid";


function App() {

    let [tasks, setTasks] = useState<TasksType[]>([
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'WFT', isDone: false}
    ])

const RemoveTasks = (id:string) => {
    let deleteTask = tasks.filter(t=>t.id !== id)
    setTasks(deleteTask)
}

const AddTasks = (title:string) =>{
        let task = {id: v1(), title: title, isDone: true}
    let NewTasks = [ task,...tasks]
    setTasks(NewTasks)
    }

    let FilteredTask

    return (
        <div className="App">
            <TodoList
                title={'WTF'}
                tasks={tasks}
                RemoveTasks={RemoveTasks}
                AddTasks={AddTasks}
            />
        </div>
    );
}

export default App;
