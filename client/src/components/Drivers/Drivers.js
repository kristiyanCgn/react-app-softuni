import { DriverList } from "../DriverList/DriverList";
import { Spinner } from "../Spinner/Spinner";
import './Drivers.css';


export const Drivers = ({drivers, isLoading}) => {
    
    if(isLoading) {
        return (
            <Spinner />
        );
    } else {
        return (
            <section id="dashboard-page" className="dashboard">
                <h1>Drivers</h1>
    
                <section>
                    <DriverList drivers={drivers}/>
                </section>
            </section>
        );
    }
}