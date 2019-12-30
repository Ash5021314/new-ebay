import React, {useState, useEffect} from 'react';
import jwt_decode from 'jwt-decode';

const Profile = () => {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
    });
    useEffect(() => {
        const token = localStorage.usertoken;

        const decoded: any = jwt_decode(token);
        setUser({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        });
    }, []);
    return (
        <div className="container">
            <div className="jumbatron mt-5">
                <h1 className="text-center">Profile</h1>
            </div>
            <table className="table col-md-6 mx-auto">
                <tbody>
                <tr>
                    <td>First Name</td>
                    <td>{user.first_name}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{user.last_name}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{user.email}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Profile;