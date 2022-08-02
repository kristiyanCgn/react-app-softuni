
export const StandingsList = ({data}) => {

    let fullName = data.Driver.givenName + ' ' + data.Driver.familyName

    return (
                 <tr>
                    <td>{data.position}</td>
                    <td>{fullName}</td>
                    <td>{data.Driver.nationality}</td>
                    <td>{data.Constructors[0].name}</td>
                    <td>{data.points}</td>
                </tr>
    );
}



                