import React, { useState } from 'react';
import TaskForm from './task';
import './task.css';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const toggleComplete = (index) => {
        const newTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(newTasks);
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'all') return true;
        if (filter === 'completed') return task.completed;
        if (filter === 'overdue') return !task.completed && new Date(task.endDate) < new Date();
        return true;
    });

    return (
        <div>
            <TaskForm addTask={addTask} />
            <div className="buttons">
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
                <button onClick={() => setFilter('overdue')}>Overdue</button>
            </div>
            <div className="task-list">
                {filteredTasks.map((task, index) => (
                    <div
                        key={index}
                        className={`task ${task.completed ? 'completed' : 'pending'} ${new Date(task.endDate) < new Date() && !task.completed ? 'overdue' : ''}`}
                        onDoubleClick={() => toggleComplete(index)}
                    >
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Start: {task.startDate}</p>
                        <p>End: {task.endDate}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskManager;