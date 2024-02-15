import { useState } from 'react';
import { Box, Slider } from '@mui/material';
import Typography from '@mui/material/Typography';

type FilterSliderProps = {
	max: number;
	min: number;
	marks: any[];
};

const FilterSlider: React.FC<FilterSliderProps> = ({ max, min, marks }) => {
	const [val, setVal] = useState<number>(min);
	const handleChange = (_: Event, newValue: number | number[]) => {
		setVal(newValue as number);
	};
	return (
		<Box sx={{ width: 200 }}>
			<Slider
				marks={marks}
				step={10}
				value={val}
				valueLabelDisplay="auto"
				min={min}
				max={max}
				onChange={handleChange}
			/>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography
					variant="body2"
					onClick={() => setVal(min)}
					sx={{ cursor: 'pointer' }}
				>
					{min} min
				</Typography>
				<Typography
					variant="body2"
					onClick={() => setVal(max)}
					sx={{ cursor: 'pointer' }}
				>
					{max} max
				</Typography>
			</Box>
		</Box>
	);
};

export default FilterSlider;
