import { DriverCard } from "./DriverCard/DriverCard";

export const DriverList = ({drivers}) => {
    return (
        <>
            {drivers.length > 0
                ? (
                    <ul className="other-drivers-list">
                        {drivers.map(x => <DriverCard key={x.code} driver={x} />)}
                    </ul>
                ) 
                : <p className="no-drivers">No drivers in database!</p>
            }
        </>
    );
}