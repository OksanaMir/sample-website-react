import { useEffect, useState } from 'react';
import { Grid, Typography, TablePagination, Box } from '@mui/material';

import { commonStyles } from '../../styles/CommonStyles';
import CitiesList from '../cities/CitiesList';
import SelectToFilter from '../SelectToFilter';
import FilterSlider from '../FilterSlider';
import { getColumns } from '../cities/helper';
import { CityObjectType } from '../cities/citiesTypes';
import { getPages } from '../cities/helper';

type IsMobileProps = {
        isMobile: boolean;
};

export default function CitiesPage({ isMobile }: IsMobileProps) {
        const { classes } = commonStyles();
        const columns = getColumns(isMobile) - 1;
        const txtAlign = isMobile ? 'center' : 'left';
        const [citiesList, setCitiesList] = useState<Array<CityObjectType>>([]);
        const [currentPage, setCurrentPage] = useState(0);
        const [pages, setPages] = useState(0);
        const [rowsPerPage, setRowsPerPage] = useState(10);

        useEffect(() => {
                const fetchCities = async () => {
                        const response = await fetch('http://localhost:4000/api/cities');
                        const data = await response.json();
                        console.log(data.result);
                        setCitiesList(data.result);
                        setPages(getPages(citiesList.length, 9));
                };

                fetchCities();
        }, []);

        const MAX = 100;
        const MIN = 0;
        const marks = [
                {
                        value: MIN,
                        label: ''
                },
                {
                        value: MAX,
                        label: ''
                }
        ];

        return (
                <>
                        <Grid container spacing={1}>
                                <Grid item xs={12}>
                                        <Typography
                                                className={classes.header1}
                                                sx={{ textAlign: txtAlign }}
                                        >
                                                Czech Cities
                                        </Typography>
                                        <Box display="flex" justifyContent="space-between">
                                                <Typography
                                                        className={classes.info}
                                                        sx={{ textAlign: txtAlign }}
                                                >
                                                        Chose City to find out more
                                                </Typography>

                                                <FilterSlider min={MIN} max={MAX} marks={marks} />
                                                <SelectToFilter />
                                        </Box>
                                        <Grid item xs={12}>
                                                <CitiesList
                                                        cities={citiesList}
                                                        classes={classes}
                                                        columns={columns}
                                                        perPage={rowsPerPage}
                                                        pageNum={currentPage}
                                                        totalNumber={pages}
                                                />
                                        </Grid>
                                </Grid>
                        </Grid>
                        <TablePagination
                                component="div"
                                rowsPerPageOptions={[
                                        10,
                                        25,
                                        50,
                                        100,
                                        { value: -1, label: 'All' }
                                ]}
                                count={citiesList.length}
                                page={currentPage}
                                onPageChange={(
                                        _event: React.MouseEvent<HTMLButtonElement> | null,
                                        newPage: number
                                ) => {
                                        setCurrentPage(newPage);
                                }}
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={event => {
                                        setRowsPerPage(parseInt(event.target.value));
                                        setCurrentPage(0);
                                }}
                        />
                </>
        );
}
