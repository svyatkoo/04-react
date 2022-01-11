import React from 'react';
import "./flightItem.css";

const FlightItem = (props) => {
    const {value: {mission_name, launch_year,
            links: {mission_patch_small}}} = props;

    return (
        <div className="flightItem">
            <h4>Mission name: {mission_name}</h4>
            <h4>Launch year: {launch_year}</h4>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    )
};

export default FlightItem;