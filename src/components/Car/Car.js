import "./car.css";

const Car = ({car}) => {
    const {id, model, price, year} = car;
    return (
        <div className="carWrap">
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
        </div>
    );
};

export default Car;