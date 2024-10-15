import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface Props {
  data: any[];
}

const TimeSeriesChart: React.FC<Props> = ({ data }) => {
  const series = [
    {
      name: 'Visitors',
      data: data.map((item) => ({
        x: `${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`,
        y: item.adults + item.children + item.babies,
      })),
    },
  ];

  const options = {
    chart: { type: 'line', zoom: { enabled: true } },
    xaxis: { type: 'datetime' },
  };

  return <ReactApexChart options={options} series={series} type="line" />;
};

export default TimeSeriesChart;
