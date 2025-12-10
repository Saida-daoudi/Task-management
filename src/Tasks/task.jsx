import React, { useState } from 'react';
import './task.css';
import TaskForm from './TaskForm';

const Task = ({ tasks, addTask, deleteTask, updateTaskStatus }) => {
    const [CurrList, setCurrList] = useState("All");

    const handleDoubleClick = (index) => {
        updateTaskStatus(index);
    };

    return (
        <div className="taskk-container">
            <div className='task'>
                <h1 className='h1'>Your <spam className="text">Tasks</spam></h1>
                <TaskForm addTask={addTask} />
                <div className="filter">
                    <button className="btn" onClick={() => setCurrList("All")}>All</button>
                    <button className="btnA" onClick={() => setCurrList("Active")}>Working</button>
                    <button className="btnC" onClick={() => setCurrList("Completed")}>Done</button>
                </div>
            </div>
            <div className="listTasks">
                {tasks.filter(task => CurrList === "All" || task.status === CurrList).map((task, index) => (
                    <div
                        key={index}
                        className={`task-item ${task.status === "Completed" ? "completed" : "active"}`}
                        onDoubleClick={() => handleDoubleClick(index)}
                    >
                        <div className='titletask'>
                            <h1 className='task-title'>{task.title}</h1>
                            <i>{task.description}</i>
                        </div>
                        <div className="task-dates" style={{ textAlign: 'start' }}>
                            <div>Start: {new Date(task.start).toLocaleString()}</div>
                            <div>End: {new Date(task.end).toLocaleString()}</div>
                        </div>
                        <div className='delet'>
                            <button onClick={() => deleteTask(index)} className="task-delete">X</button>
                            <div className='khwi'></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Task;