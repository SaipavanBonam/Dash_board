import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../index.css'

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [events, setEvents] = useState([]);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.date);
  };

  const handleAddEvent = () => {
    if (eventTitle.trim() !== '' && selectedDate) {
      setEvents([...events, { id: Math.random(), title: eventTitle, date: selectedDate }]);
      setSelectedDate(null);
      setEventTitle('');
    }
  };

  const handleDeleteEvent = (info) => {
    const eventId = info.event.id;
    setEvents(events.filter(event => event.id !== eventId));
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleDeleteEvent}
        eventContent={renderEventContent}
        eventTimeFormat={{ hour: 'numeric', minute: '2-digit', timeZoneName: 'short' }}
      />
      {selectedDate && (
        <div className="event-form">
          <input
            type="text"
            placeholder="Enter event title"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
          <button onClick={handleAddEvent}>Add Event</button>
          <button onClick={() => setSelectedDate(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

const renderEventContent = (eventInfo) => {
  return (
    <>
      <div>{eventInfo.timeText}</div>
      <div>{eventInfo.event.title}</div>
    </>
  );
};

export default CalendarPage;
