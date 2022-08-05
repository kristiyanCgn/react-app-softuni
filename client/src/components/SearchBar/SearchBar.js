import { useContext, useState } from 'react';
import { appContext } from '../../Contexts/appContext';
import styles from './SearchBar.module.css';

export const Searchbar = () => {
    const { drivers } = useContext(appContext);
    const { searchByName } = useContext(appContext);

    const onChange = (e) => {
        let query = e.target.value.toLocaleLowerCase();

        if(query === ''){
            searchByName(drivers)
            return;
        }

        const filtered = drivers.filter(x => x.familyName.toLocaleLowerCase().includes(query))
        searchByName(filtered)
   
    }

    const onSubmit = (e) => {
        e.preventDefault();

    }
    

    return (
        <form onSubmit={onSubmit} className={styles.example}>
            <input type="text" onChange={onChange} placeholder="Search by name.." name="search" />
            <button type="submit"><i className={styles["fa fa-search"]}>Search</i></button>
        </form>
    );
}