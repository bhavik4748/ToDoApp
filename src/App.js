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
        if (inputVal.trim().length > 0) {
            let arr = [...taskList];
            arr.push({ 'val': inputVal, 'done': false });
            setTaskList([...arr]);
            setInputVal('');
        }
    }

    const taskRemove = (event, index) => {
        let arr = [...taskList];
        arr.splice(index, 1);
        setTaskList([...arr]);
    }

    const taskComplete = (event, index) => {
        let arr = [...taskList];
        arr[index]['done'] = true;
        setTaskList([...arr]);
    }

    let taskHeader = null;
    if (taskList.length > 0) {
        taskHeader = (
            <div className={classes.taskListLabel}>
                Task List
            </div>
        )
    }

    let task = taskList.map((a, index) => {
        return (
            <Task key={index} taskName={a.val} index={index} isCompleted={a.done}
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
                    <button type="submit">Add Task</button>
                </div>
            </form>



            <div className={classes.taskClass}>
                {taskHeader}
                {task}
            </div>
        </div>
    );
}
export default App;