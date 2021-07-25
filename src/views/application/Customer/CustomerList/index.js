import React from 'react';
import PropTypes from 'prop-types';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import { InputAdornment, OutlinedInput, Typography, Grid, Divider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import PrintTwoToneIcon from '@material-ui/icons/PrintTwoTone';
import FileCopyTwoToneIcon from '@material-ui/icons/FileCopyTwoTone';
import { IconSearch } from '@tabler/icons';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

function createData(name, email, location, order, registered, status, action) {
    return { name, email, location, order, registered, status, action };
}

const rows = [
    createData('Joseph William 1', 'Joseph@mail.com', 'Hong Kong, China', 263, '12.07.2018', 'Complete'),
    createData('Ashy Handgun 2', 'Akshay@mail.com', 'New York, USA', 750, '12.07.2018', 'Processing'),
    createData('Larry Doe 3', 'larry@mail.com', 'Hong Kong, China', 1120, '12.07.2018', 'Processing'),
    createData('Sara Soudan 4', 'Sara@mail.com', 'New York, USA', 975, '12.07.2018', 'Confirm'),
    createData('Joseph William 5', 'Joseph@mail.com', 'Hong Kong, China', 263, '12.07.2018', 'Complete'),
    createData('Ashy Handgun 6', 'Akshay@mail.com', 'New York, USA', 750, '12.07.2018', 'Processing'),
    createData('Larry Doe 7', 'larry@mail.com', 'Hong Kong, China', 1120, '12.07.2018', 'Processing'),
    createData('Sara Soudan 8', 'Sara@mail.com', 'New York, USA', 975, '12.07.2018', 'Confirm'),
    createData('Joseph William 9', 'Joseph@mail.com', 'Hong Kong, China', 263, '12.07.2018', 'Complete'),
    createData('Ashy Handgun 10', 'Akshay@mail.com', 'New York, USA', 750, '12.07.2018', 'Processing'),
    createData('Larry Doe 11', 'larry@mail.com', 'Hong Kong, China', 1120, '12.07.2018', 'Processing'),
    createData('Sara Soudan 12', 'Sara@mail.com', 'New York, USA', 975, '12.07.2018', 'Confirm'),
    createData('Joseph William 13', 'Joseph@mail.com', 'Hong Kong, China', 263, '12.07.2018', 'Complete'),
    createData('Ashy Handgun 14', 'Akshay@mail.com', 'New York, USA', 750, '12.07.2018', 'Processing'),
    createData('Larry Doe 15', 'larry@mail.com', 'Hong Kong, China', 1120, '12.07.2018', 'Processing'),
    createData('Sara Soudan 16', 'Sara@mail.com', 'New York, USA', 975, '12.07.2018', 'Confirm')
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { id: 'name', align: true, numeric: false, disablePadding: false, label: 'Customer Name' },
    { id: 'location', align: false, numeric: false, disablePadding: false, label: 'Location' },
    { id: 'order', align: false, numeric: true, disablePadding: false, label: 'Orders' },
    { id: 'registered', align: false, numeric: false, disablePadding: false, label: 'Registered' },
    { id: 'status', align: false, numeric: false, disablePadding: false, label: 'Status' },
    { id: 'action', align: false, numeric: false, disablePadding: false, label: 'Action' }
];

const EnhancedTableHead = (props) => {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell>

                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align ? 'left' : 'center'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'desc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
};

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1)
    },

    title: {
        flex: '1 1 100%'
    },
    searchInput: {
        height: 40
    },
    tooltipHeader: {
        float: 'right',
        padding: 12
    },
    header: {
        padding: 24,
        fontWeight: 500,
        fontSize: 20
    }
}));

const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;

    return (
        <>
            <Typography variant="h4" className={classes.header}>
                Customer List
            </Typography>
            <Divider />
            <Toolbar>
                <Grid item xs={12} sm={6}>
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
                </Grid>

                <Grid item xs={12} sm={6}>
                    {numSelected > 0 ? (
                        <Tooltip title="Delete">
                            <IconButton aria-label="delete" className={classes.tooltipHeader}>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    ) : (
                        <>
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
                        </>
                    )}
                </Grid>
            </Toolbar>
        </>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2)
    },
    table: {
        minWidth: 750
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1
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

export default function CustomerList() {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table className={classes.table} aria-labelledby="tableTitle" aria-label="enhanced table">
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.name)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox checked={isItemSelected} />
                                            </TableCell>
                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="center">{row.location}</TableCell>
                                            <TableCell align="center">{row.order}</TableCell>
                                            <TableCell align="center">{row.registered}</TableCell>
                                            <TableCell align="center">{row.status}</TableCell>
                                            <TableCell align="center">
                                                <IconButton aria-label="filter list" className={classes.visibleAction}>
                                                    <VisibilityOutlinedIcon />
                                                </IconButton>
                                                <IconButton aria-label="filter list" className={classes.editAction}>
                                                    <EditOutlinedIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow>
                                    <TableCell colSpan={4} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}
