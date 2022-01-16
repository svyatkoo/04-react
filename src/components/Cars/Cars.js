import React, {useEffect, useState} from 'react';
import Car from "../Car/Car";
import {carsService} from "../services/cars.service";


const Cars = (trigger) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carsService.getAll.then(value => setCars([...value]))
    }, [trigger])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;