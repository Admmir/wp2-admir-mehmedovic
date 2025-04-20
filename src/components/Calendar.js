import { useState } from 'react';

const Calendar = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  const dates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toISOString().split('T')[0];
  });

  return (
    <div className="calendar">
      <h4>Browse by Date</h4>
      <div className="date-list">
        {dates.map(date => (
          <button
            key={date}
            className={`date-item ${selectedDate === date ? 'active' : ''}`}
            onClick={() => handleDateClick(date)}
          >
            {date}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;