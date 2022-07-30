import * as authService from '../../../services/authService';
import '../LoginAndRegister.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import { authContext } from '../../../Contexts/authContext';

export const Login = () => {
    const [errors, setErrors] = useState(null)
    const { onLogin } = useContext(authContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(e.target));

        authService.login(email, password)
            .then(authData => {
                console.log(authData);
                onLogin(authData);
                navigate('/');
            })
            .catch ((error) => {
                setErrors(error.message);
            })

    }

    return (
        <section onSubmit={onSubmit}>
            <form>
                <div className="imgcontainer">
                    <img src="img_avatar2.png" alt="" className="avatar" />
                </div>

                <div className="container">
                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="email" required />

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required />
                    {errors
                    ? <span>{errors}</span>
                    : ''
                    }
                    <button type="submit">Login</button>
                </div>

                    <p className="field">
                        <span>
                            If you don't have profile click <Link to="/register">here</Link>
                        </span>
                    </p>
            </form>
        </section>
    );
}