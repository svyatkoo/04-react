import "./usersDetails.css";

const UserDetails = ({user, getUserPosts}) => {
    const {
        id, name, username, email, phone,
        website, company, address
    } = user;

    return (
        <div className="userDetailsWrapper">
            <h1>User Details</h1>
            <div className="detailsContainer">
                <div className="detailsInfo">
                    <h6>Id: {id}</h6>
                    <h6>Name: {name}</h6>
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
                <button onClick={() => getUserPosts({id})}>Get posts</button>
            </div>
        </div>
    );
};

export default UserDetails;