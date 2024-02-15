import React from 'react';
import { Box, Button } from '@mui/material';
import Pagination from './Pagination';
import { commonStyles } from '../../styles/CommonStyles';

interface CarouselProps {
	onSkip?: () => void;
	onNext?: () => void;
	onPrevious?: () => void;
	withPagination?: boolean;
	children?: JSX.Element;
	showNext?: boolean;
	showPrevious?: boolean;
	showSkip?: boolean;
	showArrow?: boolean;
	activeStep?: number;
	elements: any[];
	handleChangeIndex: (index: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({
	onSkip,
	onNext,
	onPrevious,
	withPagination,
	children,
	showNext = true,
	showPrevious = true,
	showArrow = true,
	showSkip = true,
	activeStep,
	elements,
	handleChangeIndex
}) => {
	const { classes } = commonStyles();
	const renderImageBtn = (
		onClick?: () => void,
		show = true,
		disabled = false
	) => {
		if (!onClick || !show) {
			return null;
		}
		return (
			<Button onClick={onClick} disabled={disabled}>
				<span>&#8592;</span>
			</Button>
		);
	};

	const renderButton = (
		label: string,
		onClick?: () => void,
		show = true,
		disabled = false
	) => {
		if (!onClick || !show) {
			return null;
		}

		return (
			<Button onClick={onClick} disabled={disabled}>
				{label}
			</Button>
		);
	};
	return (
		<Box className={classes.carousel}>
			<Box
				display="flex"
				alignContent="center"
				justifyContent="space-between"
			>
				{showPrevious && renderImageBtn(onPrevious, showArrow)}
				{!showArrow &&
					renderButton('Previous', onPrevious, showPrevious)}
				{renderButton('Skip', onSkip, showSkip)}
				<Pagination
					index={activeStep}
					dots={elements.length}
					onChangeIndex={handleChangeIndex}
					onNext={onNext}
					onPrevious={onPrevious}
					toShow={withPagination}
				/>
				{children}

				{renderButton('Next', onNext, showNext)}
			</Box>
		</Box>
	);
};
export default Carousel;
