import { useContext, useState, useEffect } from 'react';

import { authContext } from '../../Contexts/authContext';
import * as driverService from '../../services/driverService';
import { MyTeamCard } from '../MyProfile/MyTeamCard';

export const MyTeam = () => {
    const { user } = useContext(authContext);
    const [myTeam, setMyTeam] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const team = await driverService.getMyTeam(user._id, user.accessToken)
            setMyTeam(team)
        }
        fetchData();
    }, [])

    return (
        <ul>
            {myTeam.map(x => <MyTeamCard key={x._id} myDriver={x} setMyTeam={setMyTeam} />)}
        </ul>
    );
    

}