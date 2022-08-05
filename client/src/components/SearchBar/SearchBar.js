import { useContext, useState } from 'react';
import { appContext } from '../../Contexts/appContext';
import styles from './SearchBar.module.css';

export const Searchbar = () => {
    const { drivers } = useContext(appContext);
    const { searchByName } = useContext(appContext);
    const [filteredDrivers, setFilteredDrivers] = useState([])

    const onChange = (e) => {
        let query = e.target.value.toLocaleLowerCase();

        if(query === ''){
            searchByName(drivers)
        }
        console.log(query);
        const filtered = drivers.filter(x => x.familyName.toLocaleLowerCase().includes(query))
        setFilteredDrivers(filtered)
        
        // searchByName(filteredDrivers);
    }
    console.log(filteredDrivers);

    const onSubmit = (e) => {
        e.preventDefault();

        searchByName(filteredDrivers);
    }
    
    return (
        <form onSubmit={onSubmit} className={styles.example}>
            <input type="text" onChange={onChange} placeholder="Search by name.." name="search" />
            <button type="submit"><i className={styles["fa fa-search"]}>Search</i></button>
        </form>
    );
}