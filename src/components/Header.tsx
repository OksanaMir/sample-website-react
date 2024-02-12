import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
// import { makeStyles } from 'tss-react/mui'
// import AvatarWithName from 'components/avatarWithName/AvatarWithName'

const Header = () => {
	// const { classes } = useStyles()
	return (
		<Paper sx={{ marginTop: '0' }}>
			<BottomNavigation>
				<BottomNavigationAction
					label="Name1"
					icon={<img src="" />}
				></BottomNavigationAction>
				<BottomNavigationAction></BottomNavigationAction>
				<BottomNavigationAction></BottomNavigationAction>
			</BottomNavigation>
		</Paper>
	);
};

export default Header;
