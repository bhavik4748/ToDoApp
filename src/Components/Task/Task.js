import React from 'react';

export const Task = (props) => {

    return (
        <>
            <div>
                {props.index + 1} {props.taskName} <button onClick={props.complete} >&#10004;</button> <button onClick={props.remove} >x</button>
            </div>

        </>
    )

}