import React from 'react';
import './calender.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const CalendarComponent = ({ tasks }) => {
    const events = tasks.map(task => ({
        title: task.title,
        start: task.start,
        description: task.description,
        extendedProps: {
            end: task.end
        }
    }));

    const handleEventClick = (info) => {
        const { event } = info;

        const startDate = event.start ? event.start.toLocaleString() : 'N/A';
        const endDate = event.extendedProps.end ? new Date(event.extendedProps.end).toLocaleString() : 'N/A';

        alert(`
            Task: ${event.title}
            Description: ${event.extendedProps.description}
            Start: ${startDate}
            End: ${endDate}
        `);
    };

    return (
        <div className='calendar'>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                dateClick={(info) => alert(`Date clicked: ${info.dateStr}`)}
                eventClick={handleEventClick}
            />
        </div>
    );
};

export default CalendarComponent;