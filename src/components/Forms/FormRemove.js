import {useForm} from "react-hook-form";

import {carsService} from "../services/cars.service";
import css from "../../App.module.css";

const FormRemove = ({update}) => {
    const {register} = useForm();

    const deleteById = async (e) => {
        e.preventDefault();
        const deletedCar = await carsService.deleteById(e.target.form.id.value);
        update(deletedCar);
    }

    return (
        <div className={css.xxx}>
            <h1>Delete car</h1>
            <form className={css.formWrapper}>
                <div><label>Id:<input type="text" defaultValue={""} {...register("id")}/></label></div>
                <button onClick={deleteById}>Delete</button>
            </form>
        </div>
    );
};

export default FormRemove;