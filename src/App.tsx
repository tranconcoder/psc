import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BreathingPage from './pages/BreathingPage';
import HomePage from './pages/HomePage';
import SleepingPage from './pages/SleepingPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/breathing" element={<BreathingPage />} />
				<Route path="/sleeping" element={<SleepingPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
