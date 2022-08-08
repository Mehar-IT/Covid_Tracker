/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CountUp from "react-countup";
import style from "./Cards.module.css";

export default function Cards({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className={`card ${style.infected}`}>
          <div className="card-body">
            <h5 className="card-title text-muted">Infected</h5>
            <h5>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2}
                separator=","
              />
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {new Date(lastUpdate).toDateString()}
            </h6>
            <p className="card-text">Number of actice casses</p>
          </div>
        </div>
      </div>

      <div className="col-md-4 my-1">
        <div className={`card ${style.recovered}`}>
          <div className="card-body">
            <h5 className="card-title text-muted">Recovered</h5>
            <h5>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2}
                separator=","
              />
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {new Date(lastUpdate).toDateString()}
            </h6>
            <p className="card-text">Number of actice casses</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className={`card ${style.death}`}>
          <div className="card-body">
            <h5 className="card-title text-muted">Deaths</h5>
            <h5>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2}
                separator=","
              />
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {new Date(lastUpdate).toDateString()}
            </h6>
            <p className="card-text">Number of actice casses</p>
          </div>
        </div>
      </div>
    </div>
  );
}
