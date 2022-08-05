import { useContext, useState } from 'react';
import { appContext } from '../../Contexts/appContext';
import styles from './SearchBar.module.css';

export const Searchbar = () => {
    const { filterDrivers } = useContext(appContext);
    const [search, setSearch] = useState('');

    const onChange = (e) => {
        let query = e.target.value.toLocaleLowerCase();
        setSearch(query);

        filterDrivers(query);

    }

    const onSubmit = (e) => {
        e.preventDefault();

        // filterDrivers(search);
    }
    

    return (
        <form onSubmit={onSubmit} className={styles.example}>
            <input type="text" onChange={onChange} value={search} placeholder="Search by name.." name="search" />
            <button type="submit"><i className={styles["fa fa-search"]}>Search</i></button>
        </form>
    );
}