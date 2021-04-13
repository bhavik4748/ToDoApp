import React, { useState } from 'react';
import classes from './InputData.module.css'

export const InputData = (props) => {

    return (
        <div >
            <div className={classes.test}>
                <input type="text" placeholder="add your task"  value={props.val} onChange={props.changed}></input>
            </div>

        </div>
    )

}