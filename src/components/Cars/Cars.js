import Car from "../Car/Car";
import "./cars.css";

const Cars = ({cars}) => {
    return (
        <div className="carsWrap">
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;