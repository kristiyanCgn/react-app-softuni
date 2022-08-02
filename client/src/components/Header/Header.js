import { useContext } from 'react';
import { authContext } from '../../Contexts/authContext';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

export const Header = () => {
    const { user } = useContext(authContext);

    return (
        <div className={styles.topnav}>
            <Link to='/' className="active">Home</Link>
            <Link to="/drivers">Drivers</Link>
            <Link to="/teams">Teams</Link>
            <Link to="/standings">Standings</Link>
            <Link to="/schedule">Schedule</Link>
            <div className={styles["topnav-right"]}>
                {user.email
                ?
                <>
                <Link to="/my-team">My Team</Link>
                <Link to="/user-drivers">Profiles</Link>
                <Link to="/create">Create</Link>
                <Link to="/logout">Logout</Link>
                </>
                :
                <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                </>
                }
            </div>
        </div>
    );
}




<header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    
                    
                </section>
            </nav>
        </header>