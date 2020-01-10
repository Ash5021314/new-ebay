import React from 'react';

const AdminLogin = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <form noValidate>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className='form-control' name="email" placeholder="Enter Email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Enter Password</label>
                            <input type="password" className='form-control' name="password" placeholder="Enter Password"
                            />
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

export default AdminLogin;