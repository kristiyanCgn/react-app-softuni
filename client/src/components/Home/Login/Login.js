import * as authService from '../../../services/authService';
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { authContext } from '../../../Contexts/authContext';
import { appContext } from '../../../Contexts/appContext';
import  styles  from '../LoginAndRegister.module.css'

export const Login = () => {
    const { errors, addError } = useContext(appContext);
    const { onLogin } = useContext(authContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(e.target));

        authService.login(email, password)
            .then(authData => {
                onLogin(authData);
                navigate('/');
            })
            .catch ((error) => {
                addError(error.message);
            })

    }

    return (
        <section onSubmit={onSubmit}>
            <form>
                <div className={styles.imgcontainer}>
                    {/* <img src="img_avatar2.png" alt="" className="avatar" /> */}
                </div>

                <div className={styles.container}>
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

                    <p>
                        <span>
                            If you don't have profile click <Link to="/register">here</Link>
                        </span>
                    </p>
            </form>
        </section>
    );
}
