import { React, useState } from 'react';
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
import { InputAdornment, OutlinedInput, Typography, Grid, Divider, Chip } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
// import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import PrintTwoToneIcon from '@material-ui/icons/PrintTwoTone';
import FileCopyTwoToneIcon from '@material-ui/icons/FileCopyTwoTone';
import { IconSearch } from '@tabler/icons';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { orderListData } from '../data';

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
    },
    stComplete: {
        color: '#00c853',
        background: '#b9f6ca60',
        '&:hover': {
            background: '#00c853',
            color: '#ffffff'
        }
    },
    stProcessing: {
        background: '#fbe9e7',
        color: '#d84315',
        '&:hover': {
            background: '#d84315',
            color: '#ffffff'
        }
    },
    stConfirm: {
        background: '#e3f2fd',
        color: '#2196f3',
        '&:hover': {
            background: '#2196f3',
            color: '#ffffff'
        }
    }
}));

const headCells = [
    { id: 'id', align: true, numeric: false, disablePadding: false, label: 'ID' },
    { id: 'name', align: true, numeric: false, disablePadding: false, label: 'Customer Name' },
    { id: 'branch', align: true, numeric: false, disablePadding: false, label: 'Branch' },
    { id: 'paymentType', align: true, numeric: true, disablePadding: false, label: 'Payment Type' },
    { id: 'quantity', align: false, numeric: true, disablePadding: false, label: 'Quantity' },
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
        <>
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox" style={{ padding: 20 }}>
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={rowCount > 0 && numSelected === rowCount}
                            onChange={onSelectAllClick}
                            inputProps={{ 'aria-label': 'select all desserts' }}
                        />
                    </TableCell>
                    {numSelected > 0 ? (
                        <>
                            <TableCell>
                                <Typography variant="h4">{numSelected} selected</Typography>
                            </TableCell>
                        </>
                    ) : (
                        headCells.map((headCell) => (
                            <TableCell
                                key={headCell.id}
                                align={headCell.align ? 'left' : 'center'}
                                sortDirection={orderBy === headCell.id ? order : false}
                                style ={{color: 'black'}}
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
                        ))
                    )}
                </TableRow>
            </TableHead>
        </>
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
        height: 40,
        marginTop: 10
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

    return (
        <>
            <Typography variant="h4" className={classes.header}>
                Order List
            </Typography>
            <Divider />

            <Toolbar>
                <Grid item xs={12} sm={6}>
                    <OutlinedInput
                        className={classes.searchInput}
                        id="input-search-header"
                        placeholder="Search order"
                        startAdornment={
                            <InputAdornment position="start">
                                <IconSearch stroke={1.5} size="1rem" />
                            </InputAdornment>
                        }
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
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
                </Grid>
            </Toolbar>
        </>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired
};

const OrderList = (props) => {
    const classes = useStyles();
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = orderListData.map((n) => n.name);
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

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, orderListData.length - page * rowsPerPage);

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
                            rowCount={orderListData.length}
                        />
                        <TableBody>
                            {stableSort(orderListData, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.name);

                                    return (
                                        <TableRow
                                            hover
                                            selected={isItemSelected}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                        >
                                            <TableCell
                                                padding="checkbox"
                                                style={{ padding: 20 }}
                                                onClick={(event) => handleClick(event, row.name)}
                                            >
                                                <Checkbox checked={isItemSelected} />
                                            </TableCell>
                                            <TableCell align="left" onClick={(event) => handleClick(event, row.name)}>
                                                <Typography variant="h5">#{row.id}</Typography>
                                            </TableCell>
                                            <TableCell padding="normal" onClick={(event) => handleClick(event, row.name)}>
                                                <Typography variant="h5">{row.name}</Typography>
                                            </TableCell>
                                            <TableCell align="left">{row.branch}</TableCell>
                                            <TableCell align="left">{row.paymentType}</TableCell>
                                            <TableCell align="center">{row.quantity}</TableCell>
                                            <TableCell align="center">{row.registered}</TableCell>
                                            <TableCell align="center">
                                                {row.status === 'Complete' ? (
                                                    <Chip label={row.status} className={classes.stComplete} />
                                                ) : row.status === 'Processing' ? (
                                                    <Chip label={row.status} className={classes.stProcessing} />
                                                ) : (
                                                    <Chip label={row.status} className={classes.stConfirm} />
                                                )}
                                            </TableCell>
                                            <TableCell align="center">
                                                <IconButton aria-label="visible" className={classes.visibleAction}>
                                                    <VisibilityOutlinedIcon />
                                                </IconButton>
                                                <IconButton aria-label="edit" className={classes.editAction}>
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
                    count={orderListData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
};

export default OrderList;
