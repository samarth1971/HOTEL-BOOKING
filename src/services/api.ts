import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchBookings = async (startDate: string, endDate: string) => {
  const response = await axios.get(`${API_URL}/bookings`, {
    params: { startDate, endDate },
  });
  return response.data;
};
