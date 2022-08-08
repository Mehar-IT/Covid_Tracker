// import React, { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import style from "./App.module.css";
import { fetchData } from "./components/api";
import image from "./components/images/image.png";
import loadingImage from "./components/images/virus.png";
import loadingStyle from "./loading.module.css";

export default function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState("");

  const fetchResponseData = async () => {
    const data = await fetchData();
    setTimeout(() => {
      setData(data);
      setLoading(false);
      setCountry(country);
    }, 2000);
  };
  useEffect(() => {
    fetchResponseData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pickCountry = async (country) => {
    const response = await fetchData(country);
    setData(response);
    setLoading(false);
    setCountry(country);
  };

  return loading === true ? (
    <div className={loadingStyle.app}>
      <img src={loadingImage} alt="" className={loadingStyle.applogo} />
    </div>
  ) : (
    <>
      <div className="container my-4">
        <div style={{ width: "100%", textAlign: "center" }}>
          <img src={image} alt="" width={"40%"} />
        </div>
        <Cards data={data} />
        <div className={style.container}>
          <CountryPicker pickCountry={pickCountry} />
          <Chart data={data} country={country} />
        </div>
      </div>
    </>
  );
}
