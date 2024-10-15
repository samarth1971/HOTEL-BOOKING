import React from 'react';

interface Props {
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
}

const DateRangePicker: React.FC<Props> = ({ setStartDate, setEndDate }) => (
  <div>
    <input type="date" onChange={(e) => setStartDate(e.target.value)} />
    <input type="date" onChange={(e) => setEndDate(e.target.value)} />
  </div>
);

export default DateRangePicker;
