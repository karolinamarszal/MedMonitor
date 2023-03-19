import React, { useRef, useState } from 'react';


const Calendar = () => {
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
  setDate(e.target.value);
  };

  return (
    <div>
      <input
        type="date"
        onChange={handleChange}
        ref={dateInputRef}
      />
    </div>
  );
};

export default Calendar;