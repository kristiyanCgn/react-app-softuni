import { TeamCard } from "./TeamCard";

export const TeamList = ({teams}) => {
    return (
        <>
            {teams.length > 0
                ? (
                    <ul className="other-drivers-list">
                        {teams.map(x => <TeamCard key={x.name} team={x} />)}
                    </ul>
                ) 
                : <p className="no-drivers">No teams in database!</p>
            }
        </>
    );
}