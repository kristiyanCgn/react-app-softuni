import { TeamCard } from "./TeamCard";
import styles from './Teams.module.css';

export const TeamList = ({teams}) => {
    return (
        <>
            {teams.length > 0
                ? (
                    <ul className={styles["other-drivers-list"]}>
                        {teams.map(x => <TeamCard key={x.name} team={x} />)}
                    </ul>
                ) 
                : <p className={styles["no-drivers"]}>No teams in database!</p>
            }
        </>
    );
}