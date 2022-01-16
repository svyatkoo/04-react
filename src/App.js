import './App.css';
import {useEffect, useState} from "react";

import Cars from "./components/Cars/Cars";
import Form from "./components/Forms/Form";
import FormRemove from "./components/Forms/FormRemove";
import FormUpdate from "./components/Forms/FormUpdate";
import FormFilter from "./components/Forms/FormFilter";
import {carsService} from "./components/services/cars.service";
import css from "./App.module.css";

function App() {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);

    const [trigger, setTrigger] = useState(null);

    const update = (data) => {
        setTrigger(data);
    }

    useEffect(() => {
        carsService.getAll.then(value => {
            setCars([...value]);
            setFilteredCars([...value]);
            console.log("trigger");
            console.log(trigger);
            console.log("trigger");
        })
    }, [trigger]);

    const getFiltered = (data => {
        let filteredCars = [...cars];
        if (data.id) {
            filteredCars = filteredCars.filter(value => value.id === +data.id)
        }

        if (data.model) {
            filteredCars = filteredCars.filter(value => value.model.toLowerCase().includes(data.model.toLowerCase()))
        }

        if (data.price) {
            filteredCars = filteredCars.filter(value => value.price === +data.price)
        }

        if (data.year) {
            console.log(data.year);
            filteredCars = filteredCars.filter(value => value.year === +data.year)
        }

        setFilteredCars(filteredCars);
    })

    return (
        <div className="App">
            <div className={css.wrap}>
                <Form update={update}/>
                <FormRemove update={update}/>
                <FormUpdate update={update}/>
            </div>
            <FormFilter getFiltered={getFiltered}/>
            <Cars cars={filteredCars} />
        </div>
    );
}

export default App;
