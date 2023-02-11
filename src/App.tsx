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



    return (
        <div className="App">
            <TodoList
                title={'WTF'}
                tasks={tasks}
            />
        </div>
    );
}

export default App;
