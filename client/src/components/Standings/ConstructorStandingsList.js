export const ConstructorStandingsList = ({data}) => {

    return (
                 <tr>
                    <td>{data.position}</td>
                    <td>{data.Constructor.name}</td>
                    <td>{data.Constructor.nationality}</td>
                    <td>{data.points}</td>
                </tr>
    );
}