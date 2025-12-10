import React from "react";
import { Link } from 'react-router-dom';
import Homepic from '../img/List3.jpeg';
import '../App.css';

function Home() {
    return (
        <div className="home">
            <div className='A'>
                <h1>
                    Master Your Day with <br></br>
                    <span className="textt">TaskTrack</span>
                </h1>
                    <p> 
                        Stay organized and productive with our intuitive time management
                        platform. Manage tasks, track progress, and stay on top of deadlines.
                        Start planning your day with TimePro.
                        Stay organized and productive with our intuitive time management
                        platform. Manage tasks, track progress.
                    </p><br></br><br></br>
                    <Link id="get-started" target="_block" to="/task">Get Started</Link>
            </div>
            <div className='A'>
                <img src={Homepic} alt=" " />
            </div>
        </div>
    )
}

export default Home;