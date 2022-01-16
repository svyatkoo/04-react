import {useForm} from "react-hook-form";

import {carsService} from "../services/cars.service";
import css from "../../App.module.css";

const FormRemove = ({update}) => {
    const {register, formState: {errors}} = useForm();

    const deleteById = async (e) => {
        e.preventDefault();
        const deletedCar = await carsService.delateById(e.target.form.id.value);
        // console.log(deletedCar);
        update(deletedCar);
    }

    return (
        <div className={css.xxx}>
            <h1>Delete car</h1>
            <form className={css.formWrapper}>
                <div><label>Id:<input type="text" defaultValue={""} {...register("id")}/></label></div>
                {errors.id && <span>{errors.id.message}</span>}
                <button onClick={deleteById}>Delete</button>
            </form>
        </div>
    );
};

export default FormRemove;