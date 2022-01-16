import {useForm} from "react-hook-form";
import {useState} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {carsService} from "../services/cars.service";
import {carValidator} from "../validators/car.validator";
import css from "../../App.module.css";

const Form = ({update}) => {
    const [formError, setFormError] = useState([]);

    const {
        register, handleSubmit, watch, formState: {errors}
    } = useForm({resolver: joiResolver(carValidator), mode: "onTouched"});

    const submit = async (car) => {
        try {
            const newCar = await carsService.create(car);
            update(newCar);
        } catch (error) {
            setFormError(error.response.data)
        }
    }

    // watch(event => console.log(event))

    // const updateById = (car) => {
    //     const updatedCar = carsService.updateById(car.id, car);
    //     update(updatedCar);
    // }

    return (
        <div className={css.xxx}>
            <h1>Create new car</h1>
            <form className={css.formWrapper}>
                {/*<div><label>Id:<input type="text" defaultValue={""} {...register("id")} /></label></div>*/}
                <div><label>Model:<input type="text" defaultValue={""} {...register("model")}/></label></div>
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price: <input type="text" defaultValue={""} {...register("price")}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year:<input type="text" defaultValue={""} {...register("year")}/></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                <button onClick={handleSubmit(submit)}>Save</button>
                {/*<button onClick={handleSubmit(updateById)}>Update</button>*/}
            </form>
            {!!formError.length && <div>{formError}</div>}

        </div>
    );
};

export default Form;