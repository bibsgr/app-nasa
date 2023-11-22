import { sub, format } from 'date-fns';

const API_KEY = 'cieVasdPCakz35wctMumSwLeMKOGcyw672Z1B15A';
const API_URL = 'https://api.nasa.gov/planetary/apod';

export const getTodayAPOD = async () => {
  const response = await fetch(`${API_URL}?api_key=${API_KEY}`);
  const data = (await response.json()) as APODResponse;
  return data;
};

export const getPast5APOD = async () => {
  const date = new Date();
  const todaysDate = format(date, 'yyyy-MM-dd');
  const fiveDaysAgoDate = format(sub(date, { days: 5 }), 'yyyy-MM-dd');

  const response = await fetch(
    `${API_URL}?api_key=${API_KEY}&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`,
  );
  const data = (await response.json()) as APODResponse[];
  return data;
};

export type APODResponse = {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};
