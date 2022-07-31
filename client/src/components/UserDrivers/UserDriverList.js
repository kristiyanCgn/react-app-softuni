import { UserDriverCard } from "./UserDriverCard";


export const UserDriverList = ({drivers}) => {

    return (
        <>
            {drivers.length > 0
                ? (
                    <ul className="other-drivers-list">
                        {drivers.map(x => <UserDriverCard key={x._id} driver={x} />)}
                    </ul>
                ) 
                : <p className="no-drivers">No drivers in database!</p>
            }
        </>
    );
}