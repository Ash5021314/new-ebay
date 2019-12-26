import React, {useState} from 'react';
import {register} from './UserFunctions'


const Register = (props: any) => {
    const [input, setInput] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    });
    const onChange = (event: any) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const onSubmit = (event: any) => {
        event.preventDefault();
        const user = {
            first_name: input.first_name,
            last_name: input.last_name,
            email: input.email,
            password: input.password
        };

        register(user).then(res => {
            console.log(res);
            props.history.push(`/Login`);

        })

    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <form noValidate onSubmit={onSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" className='form-control' name="first_name"
                                   placeholder="Enter First name"
                                   value={input.first_name} onChange={onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" className='form-control' name="last_name"
                                   placeholder="Enter Last name"
                                   value={input.last_name} onChange={onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className='form-control' name="email" placeholder="Enter Email"
                                   value={input.email} onChange={onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Enter Password</label>
                            <input type="password" className='form-control' name="password" placeholder="Enter Password"
                                   value={input.password} onChange={onChange}/>
                        </div>
                        <button type="submit" className="btn btn-lg btn-primary btn-block">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;