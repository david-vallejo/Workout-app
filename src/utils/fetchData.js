export const exerciseOptions =  {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'UrH5Ub00oKmshRwTTdlfpff521j3p1LVdkijsnYpYsYuGOG3aG',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'UrH5Ub00oKmshRwTTdlfpff521j3p1LVdkijsnYpYsYuGOG3aG',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
