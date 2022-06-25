import { Link } from 'react-router-dom';


import fbImg from '../../../Assets/Icon/fb.png';
import googleImg from '../../../Assets/Icon/google.png';

import Navigation from '../../Home/Navbar/Navigation';
import './Register.css';

const Register = () => {
    return (
        <div className='registerComponent'>
            <Navigation />
            <div className="registerForm">
                <form>
                    <div className="form-content">
                        <h2>Create an Account</h2>
                        <div>
                            <input type="text" placeholder='First Name' />
                            <input type="text" placeholder='Last Name' />
                            <input type="email" placeholder='User Name or Email' />
                            <input type="password" placeholder='Password' />
                            <input type="password" placeholder='Confirm Password' />
                            <input type="submit" className='btn btn-warning d-block' value="Create Account" />
                        </div>
                        <div className='text-center'>
                            <p>Already have an Account? <Link to='/login'>Login</Link> </p>
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

export default Register;