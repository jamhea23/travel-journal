import React from "react";

export default function Card(props) {
  const coordinateLink = props.coordinate;
  return (
    <div className="card">
      <div className="card__img-wrapper">
        <img src={props.img} className="card--img" alt="destination" />
      </div>

      <div className="card__info">
        <p className="card__info__location">
          <span className="card__info__location-icon">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
          </span>
          {props.location}{" "}
          <a
            href={coordinateLink}
            target="_blank"
            rel="noreferrer"
            className="card__info__coordinate"
          >
            View on Google Maps
          </a>
        </p>

        <h2 className="card__info__destination">{props.destination}</h2>
        <p className="card__info__date">
          {props.dateStart} - {props.dateEnd}
        </p>
        <p className="card__info__desc">{props.description}</p>
      </div>
    </div>
  );
}
