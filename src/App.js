import React, { useState, useEffect } from 'react';

import classes from './App.module.css';
import { Task } from './Components/Task/Task';
import { InputData } from './Components/InputData/InputData';

function App() {
    const [taskList, setTaskList] = useState([]);
    const [inputVal, setInputVal] = useState('');

    const changeHandler = (event) => {
        setInputVal(event.target.value);
    }

    const addItem = (event) => {
        event.preventDefault();
        let arr = [...taskList];
        arr.push(inputVal);
        setTaskList([...arr]);
        setInputVal('');
    }

    const taskRemove = (event, index) => {
        let arr = [...taskList];
        arr.splice(index, 1);
        setTaskList([...arr]);
    }

    const taskComplete = (event, index) => {

    }

    let task = taskList.map((a, index) => {
        return (
            <Task key={index} taskName={a} index={index}
                remove={(event) => taskRemove(event, index)}
                complete={(event) => taskComplete(event, index)} />
        )
    })

    return (
        <div className={classes.header} >
            <div className={classes.todoLabel}>
                ToDo App
            </div>
            <form onSubmit={addItem}>
                <div className={classes.todobackground}>
                    <InputData val={inputVal} changed={(event) => changeHandler(event)}></InputData>
                </div>

                <div>
                    <button type="submit">Add</button>
                </div>
            </form>



            <div className={classes.taskClass}>
                <div className={classes.todoLabel}>
                    Task List
            </div>
                {task}
            </div>
        </div>
    );
}
export default App;