import {useForm} from "react-hook-form";

import {carsService} from "../services/cars.service";
import css from "../../App.module.css";

const FormUpdate = ({update}) => {
    const {register, handleSubmit} = useForm()

    const updateById = async (car) => {
        try {
            const updatedCar = await carsService.updateById(car.id, car)
            update(updatedCar)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={css.xxx}>
            <h1>Update car</h1>
            <form className={css.formWrapper}>
                <div><label>Id:<input type="text" defaultValue={""} {...register("id")} /></label></div>
                <div><label>Model:<input type="text" defaultValue={""} {...register("model")}/></label></div>
                <div><label>Price: <input type="text" defaultValue={""} {...register("price")}/></label></div>
                <div><label>Year:<input type="text" defaultValue={""} {...register("year")}/></label></div>
                <button onClick={handleSubmit(updateById)}>Update</button>
            </form>
        </div>
    );
};

export default FormUpdate;