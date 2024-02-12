import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';

const Footer = () => {
	return (
		<Paper sx={{ marginBottom: '0' }}>
			<BottomNavigation>
				<BottomNavigationAction
					label="Name1"
					icon={<img src="someName.svg" />}
				></BottomNavigationAction>
				<BottomNavigationAction></BottomNavigationAction>
				<BottomNavigationAction></BottomNavigationAction>
			</BottomNavigation>
		</Paper>
	);
};

export default Footer;
