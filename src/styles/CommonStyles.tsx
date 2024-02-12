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
		btn: {
			backgroundColor: primaryBtnBg
		},
		footer: {
			backgroundColor: primaryColor
		},
		secondaryBtn: { backgroundColor: secondaryColor }
	};
});
