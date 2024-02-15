import React from 'react';
import {
	Box,
	ImageList,
	ImageListItem,
	Typography,
	IconButton,
	Card,
	CardMedia,
	CardContent
} from '@mui/material';
// import InfoIcon from '@mui/icons-material/Info';
import LocationOn from '@mui/icons-material/LocationOn';

// import { LocationOn } from '@mui/icons-material';
import { CityObjectType } from './citiesTypes';

type CitiesListProps = {
	cities: CityObjectType[];
	classes?: any;
	columns: number;
	perPage: number;
	pageNum: number;
	totalNumber?: number;
	filterParam?: string;
	filterNum?: number;
};

const CitiesList: React.FC<CitiesListProps> = ({
	cities,
	perPage,
	pageNum,

	// classes, // ToDo use to display mobile differrently
	columns,
	filterParam,
	filterNum
}) => {
	const compareCities = (a: CityObjectType, b: CityObjectType) => {
		if (a.name > b.name) {
			return 1;
		}
		if (a.name < b.name) {
			return -1;
		}
		return 0;
	};
	let a = pageNum;
	let b = perPage;
	let start = a * b;
	let end = start + b;

	console.log(filterNum, filterParam);

	return (
		<ImageList sx={{ overflow: 'unset' }} cols={columns}>
			{cities
				.sort(compareCities)
				.slice(start, end)
				.filter(city => city.population > 10)
				.map((city, index) => (
					<ImageListItem key={index}>
						<Card sx={{ maxWidth: 500 }}>
							<CardMedia
								component="img"
								image={`${city.photo}`}
								alt={city.name}
								height={250}
								sx={{
									objectFit: 'cover',
									paddingX: 7,
									paddingY: 4
								}}
							/>
							<CardContent>
								<Box sx={{ fontWeight: 'bold' }}>
									{city.name}
								</Box>
								<Box>
									<Box>
										<Typography sx={{ color: 'grey' }}>
											{`Population: ${city.population}`}
										</Typography>
										<Typography sx={{ color: 'grey' }}>
											{`Area: ${city.area} km2`}
											<IconButton
												aria-label={`info about ${city.name}`}
											>
												<LocationOn />
											</IconButton>
										</Typography>
									</Box>
								</Box>
							</CardContent>
						</Card>
					</ImageListItem>
				))}
		</ImageList>
	);
};
export default CitiesList;
