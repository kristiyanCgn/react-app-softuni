import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './MyTeamCard.css'
import { useContext } from 'react'
import { appContext } from '../../Contexts/appContext'

export const MyTeamCard = ({myDriver}) => {
    const { setMyDrivers } = useContext(appContext);

    const onDeleteClick = (driverId) => {
        setMyDrivers(state => state.filter(x => x.driverId != driverId));
    }

    return (
        <li className="my-profile-card">
            <p className="img img-driver"><img src={myDriver.imageUrl} /></p>
            <h2>{myDriver.familyName}</h2>
            <button onClick={() => onDeleteClick(myDriver.driverId)} className="button"><FontAwesomeIcon icon={faTrashCan} /></button>
        </li>
    );
}