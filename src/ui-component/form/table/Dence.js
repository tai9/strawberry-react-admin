import * as React from 'react';

//material-ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';

//import data
import { basicData } from '../../../_mockApis/forms/table/data';

const useStyles = makeStyles((theme) => ({
    header: {
        padding: '20px 15px',
        fontSize: '1.125rem',
        borderBottom: '1px solid rgba(224, 224, 224, 1)',
        color: 'black',
        fontWeight: '500',
        fontFamily: 'Roboto, sans-serif'
    },
    headerRow: { padding: '15px', fontSize: '0.875rem', color: 'rgb(33, 33, 33)', fontWeight: '500' }
}));

const Dence = () => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <div className={classes.header}>Dense Table</div>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.headerRow}>Dessert (100g serving)</TableCell>
                        <TableCell className={classes.headerRow} align="right">
                            Calories
                        </TableCell>
                        <TableCell className={classes.headerRow} align="right">
                            Fat&nbsp;(g)
                        </TableCell>
                        <TableCell className={classes.headerRow} align="right">
                            Carbs&nbsp;(g)
                        </TableCell>
                        <TableCell className={classes.headerRow} align="right">
                            Protein&nbsp;(g)
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {basicData.map((row) => (
                        <TableRow key={row.id} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default Dence;
