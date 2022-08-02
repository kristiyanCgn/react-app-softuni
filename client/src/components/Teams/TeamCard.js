import styles from './Teams.module.css';

export const TeamCard = ({team}) => {
    return (
        <li className={styles.otherTeam}>
            <h3>Name: {team.name}</h3>
            <p className={styles["team-img"]}><img src={team.imageUrl} /></p>
            <p>Nationality: {team.nationality}</p>
            <p>
                <a target="_blank" rel="noopener noreferrer" href={team.url}>See More</a>
            </p>
        </li>
    );
}