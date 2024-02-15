import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

export default function HomePage() {
	return (
		<Container component="main" sx={{ flexGrow: 0, minWidth: '80%' }}>
			<Outlet />
		</Container>
	);
}
