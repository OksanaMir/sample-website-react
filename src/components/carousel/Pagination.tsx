import { Box, Button } from '@mui/material';
import classnames from 'classnames';
import { commonStyles } from '../../styles/CommonStyles';

const PaginationDot = ({ active, index, onClick }: any) => {
	const { classes } = commonStyles();
	const handleClick = (event: any) => {
		onClick(event, index);
	};

	return (
		<Button
			onClick={handleClick}
			className={classnames({
				[classes.progressCircle]: true,
				[classes.active]: active,
				[classes.inActive]: !active
			})}
		>
			-
		</Button>
	);
};

const Pagination = ({ dots, index, onChangeIndex, toShow }: any) => {
	const handleClick = (index: number) => {
		onChangeIndex(index);
	};

	const children = [];

	for (let i = 0; i < dots; i += 1) {
		children.push(
			<PaginationDot
				key={i}
				index={i}
				active={i === index}
				onClick={() => handleClick(i)}
			/>
		);
	}

	return toShow && <Box>{children}</Box>;
};

export default Pagination;
