import React, { useState } from 'react';
import './task.css';

const TaskForm = ({ addTask }) => {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [timeStart, setTimeStart] = useState('');
    const [timeEnd, setTimeEnd] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task && description && dateStart && dateEnd && timeStart && timeEnd) {
            const startDateTime = `${dateStart}T${timeStart}`;
            const endDateTime = `${dateEnd}T${timeEnd}`;
            
            addTask({ title: task, description, start: startDateTime, end: endDateTime, status: "Active" });
            setTask('');
            setDescription('');
            setDateStart('');
            setDateEnd('');
            setTimeStart('');
            setTimeEnd('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
                className="inp"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add Description"
                className="inp"
            />
            <div className='divvv'>
                <input
                    type="date"
                    value={dateStart}
                    onChange={(e) => setDateStart(e.target.value)}
                    className="inp"
                />
                <input
                    type="time"
                    value={timeStart}
                    onChange={(e) => setTimeStart(e.target.value)}
                    className="inp iinput"
                />
            </div >
            <div className='divvv'>
                <input
                    type="date"
                    value={dateEnd}
                    onChange={(e) => setDateEnd(e.target.value)}
                    className="inp"
                />
                <input
                    type="time"
                    value={timeEnd}
                    onChange={(e) => setTimeEnd(e.target.value)}
                    className="inp iinput"
                />
            </div>
            <button
                className="inpt text-center ml-2 flex justify-center items-center w-[50px] rounded-full text-white bg-black"
                type="submit"
            >
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;