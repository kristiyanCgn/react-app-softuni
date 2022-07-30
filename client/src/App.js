import { Routes, Route } from 'react-router-dom'

import { AuthProvider } from './Contexts/authContext';
import { AppProvider } from './Contexts/appContext';
import { ProfileProvider } from './Contexts/profileContext';
import { Drivers } from './components/Drivers/Drivers';
import { Details } from './components/Details/Details';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Teams } from './components/Teams/Teams';
import { Standings } from './components/Standings/Standings';
import { Login } from './components/Home/Login/Login';
import { Register } from './components/Home/Register/Register';
import { MyTeam } from './components/MyProfile/MyTeam';
import { Schedule } from './components/Schedule/Schedule';
import { Logout } from './components/Home/Logout/Logout';
import { CreateDriver } from './components/CreateDriver/CreateDriver';
import { UserDrivers } from './components/UserDrivers/UserDrivers';
import { EditUserDriverCard } from './components/UserDrivers/EditUserDriverCard';
import { PrivateGuard } from './components/common/PrivateGuard';
import { PublicGuard } from './components/common/PublicGuard';


function App() {

  return (
    <AuthProvider>
    <div className="App">
		
	<Header />

		<main id="site-content">
      <AppProvider>
      <ProfileProvider>
        <Routes>
        	<Route element={<PrivateGuard />}>
				<Route path="/user-drivers/:profileId/edit" element={<EditUserDriverCard />} />
				<Route path="/create" element={<CreateDriver />} />
				<Route path="/my-team" element={<MyTeam />} />
				<Route path="/logout" element={<Logout />} />
				<Route path="/user-drivers" element={<UserDrivers />} />
        	</Route>
			<Route element={<PublicGuard />}>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Route>
			<Route path="/" element={<Home />} />
			<Route path="/drivers/*" element={<Drivers />} />
			<Route path="/teams/*" element={<Teams />} />
			<Route path="/standings/*" element={<Standings />} />
			<Route path="/schedule/*" element={<Schedule />} />
			<Route path="/details/:driverId" element={<Details />} />
        </Routes>
      </ProfileProvider>
      </AppProvider>
		</main>
    </div>
    </AuthProvider>
  );
}

export default App;
