import {carsService} from "./cars.service";

export const carCrud = {
    updateById: (e) => {
        const updatedCar = carsService.updateById(e.target.form.id.value);
        console.log(updatedCar);
        // update(updatedCar);
    },

    deleteById: async (e) => {
        e.preventDefault();
        try {
            const deletedCar = await carsService.delateById(e.target.form.id.value);
            console.log(deletedCar);
            // update(deletedCar);
        } catch (error) {
            // setFormError(error.response.data)
        }
    }
}