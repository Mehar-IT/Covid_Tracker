import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let countyApi = url;
  if (country) {
    countyApi = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(countyApi);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailydata) => ({
      confirm: dailydata.confirmed.total,
      death: dailydata.deaths.total,
      date: dailydata.reportDate,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
export const fetchCountryData = async () => {
  try {
    const response = await axios.get(`${url}/countries`);
    return response.data.countries.map((e) => e.name);
  } catch (error) {
    console.log(error);
  }
};
