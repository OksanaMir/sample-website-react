import * as React from 'react';
import { Box } from '@mui/material';

import { commonStyles } from '../../styles/CommonStyles';
import { invitationTexts } from './invitationTexts';
import Carousel from '../carousel/Carousel';

type IsMobileProps = {
	isMobile: boolean;
};

export default function Invitation({ isMobile }: IsMobileProps) {
	const [activeStep, setActiveStep] = React.useState(-1);
	const elements = invitationTexts();
	const { classes } = commonStyles();
	// const text = 'Hello, friends! Ready to get tour all round Czechia?';
	console.log(isMobile);

	const handleNext = () => {
		const nextStep = activeStep + 1;
		setActiveStep(nextStep < elements.length ? nextStep : activeStep);
	};

	const handleSkip = () => {
		const lastStep = elements.length - 1;
		setActiveStep(lastStep);
	};

	const handlePrevious = () => {
		console.log(activeStep);
		const prevStep = activeStep - 1;
		setActiveStep(prevStep >= -1 ? prevStep : activeStep);
	};

	const handleChangeIndex = (index: number) => {
		setActiveStep(index);
	};

	return activeStep < 0 ? (
		<Box className={classes.invitationPage}>
			<Box sx={{ padding: '8rem' }}>
				<div>Not ready yet</div>
			</Box>
		</Box>
	) : (
		<Box sx={{ height: '100%' }} className={classes.invitationPage}>
			<>
				<Carousel
					onSkip={handleSkip}
					onNext={handleNext}
					onPrevious={handlePrevious}
					withPagination={activeStep > 0}
					showSkip={activeStep > 0}
					showNext={true}
					showPrevious={activeStep === 0}
					elements={elements}
					activeStep={activeStep}
					handleChangeIndex={handleChangeIndex}
				/>
			</>
		</Box>
	);
}
