import React from 'react';
import classes from './Task.module.css';

export const Task = (props) => {

    return (

        <div className={classes.taskStyle}>
            <div className={props.isCompleted ? classes.isCompleted : ''}>{props.taskName}</div>
            <div>
                <button onClick={props.complete} >&#10004;</button> <button  onClick={props.remove} >x</button>
            </div>
        </div>


    )

}