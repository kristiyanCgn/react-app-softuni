import { useState, useEffect, useContext } from "react";
import { appContext } from "../../Contexts/appContext";

import * as teamService from '../../services/teamService';
import { Spinner } from "../Spinner/Spinner";
import { TeamList } from "./TeamsList";



export const Teams = () => {
    const [teams, setTeams] = useState([])
    const { isLoading, setIsLoading } = useContext(appContext);

    useEffect(() => {
        setIsLoading(true);
        teamService.getAll()
            .then(res => {
                setIsLoading(false)
                let result = res.MRData.ConstructorTable.Constructors
                result[0].imageUrl = 'https://iconape.com/wp-content/png_logo_vector/alfa-romeo-racing-orlen-logo-2020.png'
                result[1].imageUrl = 'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Scuderia_Alpha-Tauri.svg/1280px-Scuderia_Alpha-Tauri.svg.png'
                result[2].imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Alpine_F1_Team_Logo.svg/1024px-Alpine_F1_Team_Logo.svg.png'
                result[3].imageUrl = 'https://cdn-1.motorsport.com/images/mgl/YW745JBY/s8/aston-martin-cognizant-f1-team-1.jpg'
                result[4].imageUrl = 'https://www.charlesleclerc.com/wp-content/uploads/sites/7/2019/03/logoscuderiaferrari.png'
                result[5].imageUrl = 'https://www.formula1.com/content/fom-website/en/teams/Haas-F1-Team/_jcr_content/logo.img.jpg/1646210673011.jpg'
                result[6].imageUrl = 'https://upload.wikimedia.org/wikipedia/en/thumb/6/66/McLaren_Racing_logo.svg/1920px-McLaren_Racing_logo.svg.png'
                result[7].imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Mercedes-Benz_in_Formula_One_logo.svg/1920px-Mercedes-Benz_in_Formula_One_logo.svg.png'
                result[8].imageUrl = 'https://i.redd.it/e3a3aakmjm701.jpg'
                result[9].imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlMBn-gcv0ebaEU2d3RwJjA5iEXIfgYoKsBV8Zy06rlFZOQn40mJHaKY59Z6dzfidtTLc&usqp=CAU'
                setTeams(result)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
   

    if(isLoading) {
        return (
            <Spinner />
        );
    } else {
        return(
            <section id="dashboard-page" className="dashboard">
                <h1>Teams</h1>
    
                <section>
                    <TeamList teams={teams}/>
                </section>
            </section>
        );
    }

}