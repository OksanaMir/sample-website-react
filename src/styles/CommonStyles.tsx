import { makeStyles } from 'tss-react/mui';

export const commonStyles = makeStyles()(theme => {
	const primaryColor = '#A26B5D';
	const secondaryColor = '#1D858C';
	const primaryBtnBg = '#FB8F97';
	const textColor = '#444444';
	const boxShadow = '0 0 7px 1px rgba(179, 179, 179, 0.14)';

	return {
		typography: {
			fontFamily: ['Inter', 'sans-serif'].join(',')
		},
		mainBox: {
			color: textColor,
			boxShadow: boxShadow,

			[theme.breakpoints.up('sm')]: {
				width: 400,
				margin: '0 auto'
			}
		},
		header1: {
			color: primaryColor,
			fontSize: 24,
			fontFamily: 'Inter',
			fontWeight: '500'
		},
		info: {
			width: '100%',
			color: 'black',
			fontSize: 22,
			fontFamily: 'Inter',
			fontWeight: '400',
			wordWrap: 'break-word'
		},
		invitationPage: {
			width: '1043px',
			height: '100vh',
			margin: '0 auto',
			display: 'grid',
			gridTemplateRows: '4fr',
			alignItems: 'center'
		},
		btn: {
			backgroundColor: primaryBtnBg
		},
		footer: {
			backgroundColor: primaryColor
		},
		secondaryBtn: { backgroundColor: secondaryColor },
		cityPhotos: {
			maxHeight: '150px',

			flexGrow: '0',
			flexShrink: '1',
			padding: 'auto',
			flexBasis: '70%'
		},
		carousel: {
			position: 'absolute',
			bottom: '0',
			left: '25%'

			// alignSelf: 'end',
		},
		flexContainer: {
			// display: 'flex',
			// flexDirection: 'row',
			margin: 'auto',
			alignSelf: 'center'
		},
		progressBarContainer: {},

		active: {
			color: '#1D878C'
		},
		inActive: {
			color: '#F46B5D'
		},
		progressCircle: {
			fontSize: '80px',
			fontWeight: 'bolder'
		}
	};
});
