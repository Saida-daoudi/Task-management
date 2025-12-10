import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './Home/Home';
import Task from './Tasks/task';
import CalendarComponent from './Calendar/calender';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const updateTaskStatus = (index) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                const newStatus = task.status === "Active" ? "Completed" : "Active";
                return { ...task, status: newStatus };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <Router>
            <div className="container">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/task" element={
                        <Task 
                            tasks={tasks} 
                            addTask={addTask} 
                            deleteTask={deleteTask}
                            updateTaskStatus={updateTaskStatus}
                        />
                    } />
                    {/* <Route path="/produits" element={<Produits />} /> */}
                    <Route path="/calendar" element={<CalendarComponent tasks={tasks} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;