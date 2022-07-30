import { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom'

import { appContext } from './Contexts/appContext';
import { authContext } from './Contexts/authContext';
import { Drivers } from './components/Drivers/Drivers';
import { Details } from './components/Details/Details';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Teams } from './components/Teams/Teams';
import { Standings } from './components/Standings/Standings';
import { Login } from './components/Home/Login/Login';
import { Register } from './components/Home/Register/Register';

import * as driverService from './services/driverService';
import { MyTeam } from './components/MyProfile/MyTeam';
import { Schedule } from './components/Schedule/Schedule';
import { Logout } from './components/Home/Logout/Logout';
import { useLocalStorage } from './hooks/useLocalStorage';


function App() {
	const [drivers, setDrivers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [myDrivers, setMyDrivers] = useState([]);
  const [user, setUser] = useLocalStorage('user' ,{});

  const onLogin = (data) =>{
    setUser(data);
  }

  const onLogout = () => {
    setUser({});
  }


    useEffect(() => {
      setIsLoading(true);
        driverService.getAll()
            .then(result => {
              setIsLoading(false);
                let finalResult = result.MRData.DriverTable.Drivers
                finalResult[0].imageUrl = 'https://www.formula1.com/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/2col/image.png'
                finalResult[1].imageUrl = 'https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col/image.png'
                finalResult[2].imageUrl = 'https://www.formula1.com/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/2col/image.png'
                finalResult[3].imageUrl = 'https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/2col/image.png'
                finalResult[4].imageUrl = 'https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png'
                finalResult[5].imageUrl = 'https://www.formula1.com/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/2col/image.png'
                finalResult[6].imageUrl = 'https://www.formula1.com/content/dam/fom-website/drivers/N/NICLAF01_Nicholas_Latifi/niclaf01.png.transform/2col/image.png'
                finalResult[7].imageUrl = 'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png'
                finalResult[8].imageUrl = 'https://www.formula1.com/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png.transform/2col/image.png'
                finalResult[9].imageUrl = 'https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col/image.png'
                finalResult[10].imageUrl = 'https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/2col/image.png'
                finalResult[11].imageUrl = 'https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col/image.png'
                finalResult[12].imageUrl = 'https://www.formula1.com/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/2col/image.png'
                finalResult[13].imageUrl = 'https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col/image.png'
                finalResult[14].imageUrl = 'https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col/image.png'
                finalResult[15].imageUrl = 'https://www.formula1.com/content/dam/fom-website/drivers/M/MICSCH02_Mick_Schumacher/micsch02.png.transform/2col/image.png'
                finalResult[16].imageUrl = 'https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/2col/image.png'
                finalResult[17].imageUrl = 'https://www.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/2col/image.png'
                finalResult[18].imageUrl = 'https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png'
                finalResult[19].imageUrl = 'https://www.formula1.com/content/dam/fom-website/drivers/S/SEBVET01_Sebastian_Vettel/sebvet01.png.transform/2col/image.png'
                finalResult[20].imageUrl = 'https://www.formula1.com/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png.transform/2col/image.png'
                setDrivers(finalResult);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

  return (
    <authContext.Provider value={{user, onLogin, onLogout}}>
    <div className="App">
		
	<Header />

		<main id="site-content">
      <appContext.Provider value={{isLoading, setIsLoading, myDrivers, setMyDrivers}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drivers/*" element={<Drivers drivers={drivers} isLoading={isLoading} />} />
          <Route path="/teams/*" element={<Teams />} />
          <Route path="/standings/*" element={<Standings />} />
          <Route path="/schedule/*" element={<Schedule />} />
          <Route path="/details/:driverId" element={<Details drivers={drivers} />} />
          <Route path="/my-team" element={<MyTeam myDrivers={myDrivers}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </appContext.Provider>
		</main>
    </div>
    </authContext.Provider>
  );
}

export default App;
