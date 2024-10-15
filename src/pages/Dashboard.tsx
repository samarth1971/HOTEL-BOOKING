import React, { useState, useEffect } from 'react';
import { fetchBookings } from '../services/api';
import TimeSeriesChart from '../components/Charts/TimeSeriesChart';
import ColumnChart from '../components/Charts/ColumnChart';
import Sparkline from '../components/Charts/Sparkline';
import DateRangePicker from '../components/DateRangePicker';

const Dashboard: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    if (startDate && endDate) {
      fetchBookings(startDate, endDate).then(setData);
    }
  }, [startDate, endDate]);

  const visitorCount = data.reduce((acc, item) => acc + item.adults + item.children + item.babies, 0);

  return (
    <div>
      <DateRangePicker setStartDate={setStartDate} setEndDate={setEndDate} />
      <TimeSeriesChart data={data} />
      <ColumnChart data={data} />
      <Sparkline label="Adult Visitors" dataKey="adults" data={data} />
      <Sparkline label="Children Visitors" dataKey="children" data={data} />
      <div>Total Visitors: {visitorCount}</div>
    </div>
  );
};

export default Dashboard;
