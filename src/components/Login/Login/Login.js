import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../Home/Navbar/Navigation'; 

import fbImg from '../../../Assets/Icon/fb.png';
import googleImg from '../../../Assets/Icon/google.png';

const Login = () => {
    return (
        <div>
            <Navigation />
            <div className="registerForm">
                <form>
                    <div className="form-content">
                        <h2>Login</h2>
                        <div> 
                            <input type="email" placeholder='User Name or Email' />
                            <input type="password" placeholder='Password' /> 
                            <input type="submit" className='btn btn-warning d-block' value="Login" />
                        </div>
                        <div className='text-center'>
                            <p>Don't have an Account? <Link to='/register'>Create an Account</Link> </p>
                        </div>
                    </div>
                    <div className="social-login">
                        <button className=''> 
                            <img src={googleImg} className='img-fluid me-3' width='26px' height='26px' alt="" />
                            Continue with Google 
                        </button>
                        <button>
                        <img src={fbImg} className='img-fluid me-3' width='30px' height='30px' alt="" />
                            Continue with Facebook 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;