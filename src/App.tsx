import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';

import './App.css';
import HomePage from './pages/HomePage';
import CitiesPage from './components/cities/CitiesPage';
import Invitation from './components/invitation/Invitation';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	const theme = createTheme({
		typography: {
			fontFamily: 'Inter'
		}
	});
	const isMobile = useMediaQuery<boolean>('(max-width:600px)');

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<div className="App">
					{!isMobile && <Header />}
					<Routes>
						<Route path="/" element={<HomePage />}>
							<Route
								path="/"
								element={<CitiesPage isMobile={isMobile} />}
							></Route>
							<Route
								path="/invitation"
								element={<Invitation isMobile={isMobile} />}
							/>
						</Route>
					</Routes>
					{isMobile && <Footer />}
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
