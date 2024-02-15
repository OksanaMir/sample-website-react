import { useState } from 'react';

import {
	FormControl,
	FormHelperText,
	MenuItem,
	Select,
	SelectChangeEvent
} from '@mui/material';

const SelectToFilter = () => {
	const [filterBy, setFilterBy] = useState('');

	return (
		<FormControl sx={{ width: 150, marginLeft: 2 }}>
			<Select
				value={filterBy}
				displayEmpty
				inputProps={{ 'aria-label': 'Chose Filter' }}
				onChange={(event: SelectChangeEvent) => {
					setFilterBy(event.target.value);
				}}
			>
				<MenuItem value="By population">By population</MenuItem>
				<MenuItem value="By Area">By Area</MenuItem>
			</Select>
			<FormHelperText>Chose Filter</FormHelperText>
		</FormControl>
	);
};

export default SelectToFilter;
