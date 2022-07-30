
export const ScheduleDetails = ({circuit}) => {
    const thirdPractice = circuit.ThirdPractice;

    return (
        <table id="customers">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Event</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{circuit.FirstPractice.date}</td>
                    <td>First Practice
                        <p>{circuit.FirstPractice.time}</p>
                    </td>
                </tr>
                <tr>
                    <td>{circuit.SecondPractice.date}</td>
                    <td>Second Practice
                    <p>{circuit.SecondPractice.time}</p>
                    </td>
                </tr>
                {thirdPractice 
                ? 
                <tr>
                    <td>{circuit.ThirdPractice.date}</td>
                    <td>Third Practice
                    <p>{circuit.ThirdPractice.time}</p>
                    </td>
                </tr>
                : 
                <tr>
                    <td>{circuit.Sprint.date}</td>
                    <td>Sprint
                    <p>{circuit.Sprint.time}</p>

                    </td>
                </tr>
                }
                <tr>
                    <td>{circuit.Qualifying.date}</td>
                    <td>Qualifying
                    <p>{circuit.Qualifying.time}</p>

                    </td>
                </tr>
                <tr>
                    <td>{circuit.date}</td>
                    <td>Race
                    <p>{circuit.time}</p>

                    </td>
                </tr>
                
            </tbody>
        </table>
    );
}