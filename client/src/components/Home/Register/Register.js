import * as authService from '../../../services/authService';
import { useContext } from 'react';
import { authContext } from '../../../Contexts/authContext';

import styles from '../LoginAndRegister.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { appContext } from '../../../Contexts/appContext';

export const Register = () => {
    const { errors, addError } = useContext(appContext);
    const { onLogin } = useContext(authContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const { email, password, repeatPassword } = Object.fromEntries(new FormData(e.target));

        if(password !== repeatPassword) {
            addError('Passwords do not match!')
            return;
        }

            authService.register(email, password)
                .then(authData => {
                    onLogin(authData);
                    navigate('/');
                })
                .catch((error) => {
                    addError(error.message);
                })
        
    }

    return (
        <section>
            <form className={styles.loginAndRegisterForm} onSubmit={onSubmit}>
                <div className={styles.imgcontainet}>
                </div>

                <div className={styles.container}>
                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="email" required />

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required />

                    <label htmlFor="repeatPassword"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="repeatPassword" required />
                    
                    {errors
                    ? <span className={styles.spanErr}>{errors}</span>
                    : ''
                    }
                    <button type="submit">Register</button>
                </div>

                    <p>
                        <span>
                            If you don't have profile click <Link to="/login">here</Link>
                        </span>
                    </p>
            </form>
        </section>
    );
}
