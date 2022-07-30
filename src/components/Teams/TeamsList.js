import { TeamCard } from "./TeamCard";

export const TeamList = ({teams}) => {
    return (
        <>
            {teams.length > 0
                ? (
                    <ul className="other-pets-list">
                        {teams.map(x => <TeamCard key={x.name} team={x} />)}
                    </ul>
                ) 
                : <p className="no-pets">No teams in database!</p>
            }
        </>
    );
}