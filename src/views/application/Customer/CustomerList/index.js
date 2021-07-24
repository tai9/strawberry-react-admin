import { React } from 'react';
import Table from '@material-ui/core/Table';
import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';
import PrintTwoToneIcon from '@material-ui/icons/PrintTwoTone';
import FileCopyTwoToneIcon from '@material-ui/icons/FileCopyTwoTone';
import { InputAdornment, OutlinedInput, Typography } from '@material-ui/core';
import { IconSearch } from '@tabler/icons';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { makeStyles } from '@material-ui/styles';
import TablePagination from '@material-ui/core/TablePagination';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableFooter from '@material-ui/core/TableFooter';
import Checkbox from '@material-ui/core/Checkbox';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650
    },
    header: {
        fontWeight: 'bold'
    },
    title: {
        padding: 24,
        fontWeight: 500,
        fontSize: 20
    },
    searchControl: {
        padding: 24,
        width: '100%'
    },
    searchInput: {
        height: 40
    },
    tooltipHeader: {
        float: 'right'
    },
    visibleAction: {
        color: 'rgb(33, 150, 243)',
        padding: 12
    },
    editAction: {
        color: 'rgb(103, 58, 183)',
        padding: 12
    }
}));

function createData(name, email, location, order, registered, status, action) {
    return { name, email, location, order, registered, status, action };
}

const rows = [
    createData('Joseph William', 'Joseph@mail.com', 'Hong Kong, China', 263, '12.07.2018', 'Complete'),
    createData('Ashy Handgun', 'Akshay@mail.com', 'New York, USA', 750, '12.07.2018', 'Processing'),
    createData('Larry Doe', 'larry@mail.com', 'Hong Kong, China', 1120, '12.07.2018', 'Processing'),
    createData('Sara Soudan', 'Sara@mail.com', 'New York, USA', 975, '12.07.2018', 'Confirm'),
    createData('Joseph William', 'Joseph@mail.com', 'Hong Kong, China', 263, '12.07.2018', 'Complete')
    // createData('Ashy Handgun', 'Akshay@mail.com', 'New York, USA', 750, '12.07.2018', 'Processing'),
    // createData('Larry Doe', 'larry@mail.com', 'Hong Kong, China', 1120, '12.07.2018', 'Processing'),
    // createData('Sara Soudan', 'Sara@mail.com', 'New York, USA', 975, '12.07.2018', 'Confirm'),
    // createData('Joseph William', 'Joseph@mail.com', 'Hong Kong, China', 263, '12.07.2018', 'Complete'),
    // createData('Ashy Handgun', 'Akshay@mail.com', 'New York, USA', 750, '12.07.2018', 'Processing'),
    // createData('Larry Doe', 'larry@mail.com', 'Hong Kong, China', 1120, '12.07.2018', 'Processing'),
    // createData('Sara Soudan', 'Sara@mail.com', 'New York, USA', 975, '12.07.2018', 'Confirm'),
    // createData('Joseph William', 'Joseph@mail.com', 'Hong Kong, China', 263, '12.07.2018', 'Complete'),
    // createData('Ashy Handgun', 'Akshay@mail.com', 'New York, USA', 750, '12.07.2018', 'Processing'),
    // createData('Larry Doe', 'larry@mail.com', 'Hong Kong, China', 1120, '12.07.2018', 'Processing'),
    // createData('Sara Soudan', 'Sara@mail.com', 'New York, USA', 975, '12.07.2018', 'Confirm')
];

const CustomerList = () => {
    const classes = useStyles();
    // const count = 0;
    return (
        <Paper component={Paper}>
            <div>
                <Typography variant="h4" className={classes.title}>
                    Customer List
                </Typography>
                <Divider />
            </div>

            <div className={classes.searchControl}>
                <OutlinedInput
                    className={classes.searchInput}
                    id="input-search-header"
                    placeholder="Search customer"
                    startAdornment={
                        <InputAdornment position="start">
                            <IconSearch stroke={1.5} size="1rem" className={classes.startAdornment} />
                        </InputAdornment>
                    }
                />
                <Tooltip title="Filter" className={classes.tooltipHeader}>
                    <IconButton aria-label="filter">
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Print " className={classes.tooltipHeader}>
                    <IconButton aria-label="Print">
                        <PrintTwoToneIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Copy " className={classes.tooltipHeader}>
                    <IconButton aria-label="Copy">
                        <FileCopyTwoToneIcon />
                    </IconButton>
                </Tooltip>
            </div>

            <Table className={classes.table} title="Customer List">
                <TableRow>
                    <TableCell padding="checkbox" style={{ padding: 24 }}>
                        <Checkbox inputProps={{ 'aria-label': 'select all desserts' }} />
                    </TableCell>
                    <TableCell className={classes.header}>Customer Name</TableCell>
                    <TableCell className={classes.header} align="center">
                        Location
                    </TableCell>
                    <TableCell className={classes.header} align="center">
                        Order
                    </TableCell>
                    <TableCell className={classes.header} align="center">
                        Register
                    </TableCell>
                    <TableCell className={classes.header} align="center">
                        Status
                    </TableCell>
                    <TableCell className={classes.header} align="center">
                        Action
                    </TableCell>
                </TableRow>
                <TableBody>
                    {rows.map((row, count) => (
                        <TableRow key={row.name}>
                            <TableCell padding="checkbox" style={{ padding: 24 }}>
                                <Checkbox inputProps={{ 'aria-label': 'select all desserts' }} />
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Typography variant="h5">
                                    {row.name} {count + 1}
                                </Typography>
                                <Typography variant="subtitle2">{row.email}</Typography>
                            </TableCell>
                            <TableCell align="center">{row.location}</TableCell>
                            <TableCell align="center">{row.order}</TableCell>
                            <TableCell align="center">{row.registered}</TableCell>
                            <TableCell align="center">
                                <span className={row.status === 'Complete' ? 'bgBlue' : 'bgRed'}>{row.status}</span>
                            </TableCell>
                            <TableCell align="center">
                                <IconButton aria-label="filter list" className={classes.visibleAction}>
                                    <VisibilityOutlinedIcon />
                                </IconButton>
                                <IconButton aria-label="filter list" className={classes.editAction}>
                                    <EditOutlinedIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rows.length}
                page={0}
                //   onPageChange={handleChangePage}
                //   onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default CustomerList;
