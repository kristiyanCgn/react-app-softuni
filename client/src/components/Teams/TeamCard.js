import { Link} from 'react-router-dom';

export const TeamCard = ({team}) => {
    return (
        <li className="otherDriver">
            <h3>Name: {team.name}</h3>
            <p className="img"><img src={team.imageUrl} /></p>
            <p>Nationality: {team.nationality}</p>
            <p>
                <a target="_blank" rel="noopener noreferrer" href={team.url}>See More</a>
            </p>
        </li>
    );
}