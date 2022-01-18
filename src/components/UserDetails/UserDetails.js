import {Link} from "react-router-dom";
import {useState} from "react";

import "./UserDetails.css";

const UserDetails = ({user}) => {
    const {
        id, name, username, email, phone,
        website, company, address
    } = user;

    const [show, toggleShow] = useState(true);

    return (
        <div className="userDetailsWrapper">
            <h1>User Details</h1>
            <div className="detailsInfo">
                <div className="detailsInfo">
                    <p>Id: {id}</p>
                    <p>Name: {name}</p>
                    <p>Username: {username}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Website: {website}</p>
                    <p>Company</p>
                    <ul>
                        <li>company name: {company.name}</li>
                        <li>catchPhrase: {company.catchPhrase}</li>
                        <li>bs: {company.bs}</li>
                    </ul>
                    <p>Address</p>
                    <ul>
                        <li>Street: {address.street}</li>
                        <li>Suite: {address.suite}</li>
                        <li>City: {address.city}</li>
                        <li>Zipcode: {address.zipcode}</li>
                        <p>Geo</p>
                        <li>Lat: {address.geo.lat}</li>
                        <li>Geo: {address.geo.lng}</li>
                    </ul>
                </div>

                <Link to={id + "/posts"} state={show}>
                    <button onClick={() => toggleShow(!show)}> User Posts</button>
                </Link>
            </div>
        </div>
    );
};

export default UserDetails;