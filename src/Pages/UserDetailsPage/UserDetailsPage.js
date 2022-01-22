import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userServise} from "../../services/user.servise";
import "./user.details.page.css";

const UserDetailsPage = () => {
    const {id} = useParams();
    const state = useLocation();
    const [user, setUser] = useState({});

    useEffect(()=> {
        if (state) {
            setUser(state);
        }
        userServise.getById(id).then(value => setUser(value));
    }, [id])

    return (
        <div className="userDetailsWrapper">
            <h1>User Details</h1>
            <div className="detailsInfoWrapper">
                <div className="detailsInfo">
                    <p>Id: {user.id}</p>
                    <p>Name: {user.name}</p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                    <p>Company</p>
                    <ul>
                        <li>company name: {user.company?.name}</li>
                        <li>catchPhrase: {user.company?.catchPhrase}</li>
                        <li>bs: {user.company?.bs}</li>
                    </ul>
                    <p>Address</p>
                    <ul>
                        <li>Street: {user.address?.street}</li>
                        <li>Suite: {user.address?.suite}</li>
                        <li>City: {user.address?.city}</li>
                        <li>Zipcode: {user.address?.zipcode}</li>
                        <p>Geo</p>
                        <li>Lat: {user.address?.geo?.lat}</li>
                        <li>Geo: {user.address?.geo?.lng}</li>
                    </ul>
                </div>

                <Link to={"posts"}>
                    <button>User Posts</button>
                </Link>
            </div>

            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UserDetailsPage};