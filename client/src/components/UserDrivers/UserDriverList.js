import { UserDriverCard } from "./UserDriverCard";


export const UserDriverList = ({drivers}) => {
    return (
        <>
            {drivers.length > 0
                ? (
                    <ul className="other-pets-list">
                        {drivers.map(x => <UserDriverCard key={x.driverData.displayName} driver={x} />)}
                    </ul>
                ) 
                : <p className="no-pets">No drivers in database!</p>
            }
        </>
    );
}