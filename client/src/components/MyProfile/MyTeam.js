import { MyTeamCard } from '../MyProfile/MyTeamCard';

export const MyTeam = ({myDrivers}) => {

    return (
        <ul className="other-pets-list">
            {myDrivers.map(x => <MyTeamCard key={x.driverId} myDriver={x} />)}
        </ul>
    );
}