import {useForm} from "react-hook-form";
import {carsService} from "../services/cars.service";
import {useState} from "react";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/car.validator";

const Form = ({update}) => {
    const [formError, setFormError] = useState({});

    const {
        register, handleSubmit, watch, formState: {errors}
    } = useForm({resolver: joiResolver(carValidator), mode: "onTouched"}
    );


    const submit = async (car) => {
        try {
            const newCar = await carsService.create(car);
            console.log(newCar)
            update(newCar)
        } catch (error) {
            setFormError(error.response.data)
        }
    }

    // watch(event => console.log(event))
    return (
        <div>
            <form>
                <div><label>Model:<input type="text" defaultValue={""} {...register("model")}/></label></div>
                {/*{formError.model && <span>{formError.model[0]}</span>}*/}
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price: <input type="text" defaultValue={""} {...register("price")}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year:<input type="text" defaultValue={""} {...register("year")}/></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                <button onClick={handleSubmit(submit)}>Save</button>
            </form>
        </div>
    );
};

export default Form;