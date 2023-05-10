import axios from "axios";

function fetchAPI() {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const keyAPI = process.env.REACT_APP_KEY;
  const symbols = process.env.REACT_APP_SYMBOLS;
  const base = process.env.REACT_APP_BASE;
  const API_URL = `${baseURL}rates/latest?apikey=${keyAPI}&symbols=${symbols}&base=${base}`;

  return axios.get(API_URL);
}

export default fetchAPI;
