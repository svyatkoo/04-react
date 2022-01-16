import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi/dist/joi";
import {carValidator} from "../validators/car.validator";
import {carsService} from "../services/cars.service";

const FormRemove = ({update}) => {
    // const [formError, setFormError] = useState({});

    const {
        register, handleSubmit, formState: {errors}
    } = useForm({resolver: joiResolver(carValidator), mode: "onTouched"}
    );


    const removeById = async (id) => {
        try {
            // const removedCar = await carsService.delateById(id);
            console.log(id);
            // update(removedCar);
        } catch (error) {
            // setFormError(error.response.data)
        }
    }

    // const formInfo = (e) => {
    //     const eData = {...form, [e.target.name]: e.target.value}
    //     setForm({...setForm, ...eData})
    //     // getFilter(eData)
    // }
    const [form, setForm] = useState({id: ""})
    const formInfo = (e) => {
        const eData = {...form, [e.target.name]: e.target.value}
        setForm({...eData})
        // getFilter(eData)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const eData = {[e.target.name]: e.target.value}
        console.log(eData);

        console.log(e.target.value);
    }

    return (
        <div>
            <hr/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div><label>Id:<input type="text" defaultValue={""} {...register("id")}/></label></div>
                {errors.id && <span>{errors.id.message}</span>}
                <button onClick={handleSubmit(removeById)}>Save</button>
            </form>
            <hr/>
        </div>
    );
};

export default FormRemove;