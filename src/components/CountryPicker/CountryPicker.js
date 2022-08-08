import React, { useEffect, useState } from "react";
import { fetchCountryData } from "../api";

export default function CountryPicker(props) {
  const [countryData, setCountryData] = useState([]);
  const fetchData = async () => {
    setCountryData(await fetchCountryData());
  };
  useEffect(() => {
    fetchData();
  }, [setCountryData]);

  return (
    <div className="form-floating my-3">
      <select
        className="form-select"
        id="floatingSelect"
        aria-label="Floating label select example"
        onChange={(e) => props.pickCountry(e.target.value)}
      >
        <option className="text-center" value="">
          Global
        </option>
        {countryData.map((element, index) => (
          <option className="text-center" value={element} key={index}>
            {element}
          </option>
        ))}
      </select>
      <label htmlFor="floatingSelect" className="text-center">
        Select Country
      </label>
    </div>
  );
}
