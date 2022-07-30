import * as authService from '../../../services/authService';

import { useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { authContext } from '../../../Contexts/authContext';

export const Logout = () => {
    const navigate = useNavigate();
    const { user, onLogout } = useContext(authContext);

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                onLogout();
                navigate('/');
            })
            .catch(() => {
                navigate('/')
            })
    })

    return null;
}