import React, {useState} from 'react';
import {login} from './UserFunctions'


const Login = (props: any) => {
    const [input, setInput] = useState({
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
            email: input.email,
            password: input.password
        };
        login(user).then(res => {
    console.log(res);
            if (res) {
                props.history.push(`/profile`)
            }
        })

    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <form noValidate onSubmit={onSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
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
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;