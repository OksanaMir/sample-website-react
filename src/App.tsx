import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	const theme = createTheme({
		typography: {
			fontFamily: 'Inter'
		}
	});

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<div className="App">
					<Header />
					<Routes>
						<Route path="/" element={<HomePage />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
