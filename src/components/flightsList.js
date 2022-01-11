import {useEffect, useState} from "react";
import FlightItem from "./flightItem";

function FlightsList () {
    const [flightsList, setFlightsList] = useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches")
            .then(value => value.json())
            .then(flights => {
                setFlightsList(flights.filter((value) => value.launch_year !== "2020"));
            })
    }, []);

    return (
        <div className="wrapper">
            {flightsList.map(value => <FlightItem key = {value.flight_number} value = {value} />)}
        </div>
    )
}

export default FlightsList;