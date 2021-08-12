import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        padding: '20px 15px',
        fontSize: '1.125rem',
        color: 'black',
        fontWeight: '500',
        fontFamily: 'Roboto, sans-serif',
        borderBottom: '1px solid rgba(224, 224, 224, 1)'
    },
    headerItem: {
        padding: '10px 15px',
        fontSize: '0.875rem',
        color: 'rgb(33, 33, 33)',
        fontWeight: '500',
        fontFamily: 'Roboto, sans-serif',
        borderBottom: '2px solid rgba(224, 224, 224, 1)'
    },
    headerRow: { fontSize: '0.875rem', color: 'rgb(33, 33, 33)', fontWeight: '500' },
    item: { border: '1px solid rgba(224, 224, 224, 1)', margin: '10px', borderRadius: '20px' }
}));

function createData(name, calories, fat, carbs, protein, price) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1
            }
        ]
    };
}

function Row(props) {
    const classes = useStyles();

    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell className={classes.headerRow} align="right">
                    {row.protein}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse className={classes.item} in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <div className={classes.headerItem}>History</div>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.headerRow}>Date</TableCell>
                                        <TableCell className={classes.headerRow}>Customer</TableCell>
                                        <TableCell className={classes.headerRow} align="right">
                                            Amount
                                        </TableCell>
                                        <TableCell className={classes.headerRow} align="right">
                                            Total price ($)
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">{Math.round(historyRow.amount * row.price * 100) / 100}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired
            })
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired
    }).isRequired
};

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5)
];

const CollapseTable = () => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <div className={classes.header}>Collapsible Table</div>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
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
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default CollapseTable;
