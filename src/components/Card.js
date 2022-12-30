import React from "react";

export default function Card(props) {
  const coordinateLink = props.coordinate;
  return (
    <div className="card">
      <div className="card--img-wrapper">
        <img src={props.img} className="card--img" alt="destination" />
      </div>

      <div className="card--info">
        <p className="card--info--location">
          <span className="card--info--location-icon">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
          </span>
          {props.location}{" "}
          <a
            href={coordinateLink}
            target="_blank"
            rel="noreferrer"
            className="card--info--coordinate"
          >
            View on Google Maps
          </a>
        </p>

        <h2 className="card--info--destination">{props.destination}</h2>
        <p className="card--info--date">
          {props.dateStart} - {props.dateEnd}
        </p>
        <p className="card--info--desc">{props.description}</p>
      </div>
    </div>
  );
}
