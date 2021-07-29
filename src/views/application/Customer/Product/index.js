import { React, useState } from 'react';
import PropTypes from 'prop-types';
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
// import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import PrintTwoToneIcon from '@material-ui/icons/PrintTwoTone';
import FileCopyTwoToneIcon from '@material-ui/icons/FileCopyTwoTone';
import { IconSearch } from '@tabler/icons';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function createData(id, name, category, price, date, quantity) {
    return { id, name, category, price, date, quantity };
}

const rows = [
    createData(790841, 'Samsung TV 32” LED Retina', 'Television', 2500, '12.07.2018', 17),
    createData(790842, 'Iphone 11 Pro Max', 'Television', 750, '12.07.2018', 8),
    createData(798699, 'Samsung TV 34” LED Retina', 'Television', 5000, '12.07.2018', 7),
    createData(790752, 'Iphone 12 Pro Max', 'Television', 2500, '12.07.2018', 10),
    createData(790955, 'Samsung TV 36” LED Retina', 'Television', 263, '12.07.2018', 7),
    createData(790785, 'Iphone 13 Pro Max', 'Television', 2500, '12.07.2018', 7),
    createData(800837, 'Samsung TV 38” LED Retina', 'Television', 1120, '12.07.2018', 7),
    createData(810365, 'Iphone 14 Pro Max', 'Television', 2500, '12.07.2018', 7),
    createData(810814, 'Samsung TV 40” LED Retina', 'Television', 263, '12.07.2018', 7),
    createData(820385, 'Iphone 15 Pro Max', 'Television', 750, '12.07.2018', 7),
    createData(820885, 'Samsung TV 42” LED Retina', 'Television', 2500, '12.07.2018', 7),
    createData(830390, 'Iphone 16 Pro Max', 'Television', 975, '12.07.2018', 7),
    createData(830879, 'Samsung TV 44” LED Retina', 'Television', 2500, '12.07.2018', 12),
    createData(900111, 'Iphone 17 Pro Max', 'Television', 750, '12.07.2018', 7),
    createData(900836, 'Samsung TV 46” LED Retina', 'Television', 1120, '12.07.2018', 7),
    createData(900112, 'Iphone 18 Pro Max', 'Television', 975, '12.07.2018', 7),
    createData(900871, 'Samsung TV 48” LED Retina', 'Television', 975, '12.07.2018', 9),
    createData(910232, 'Iphone 19 Pro Max', 'Television', 1120, '12.07.2018', 3),
    createData(910886, 'Samsung TV 50” LED Retina', 'Television', 1120, '12.07.2018', 100),
    createData(910232, 'Iphone 20 Pro Max', 'Television', 1120, '12.07.2018', 5)
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
        clip: 'rect(0 0 0 0)',
        overflow: 'hidden',
        position: 'absolute'
    }
}));

const headCells = [
    { id: 'id', align: false, numeric: false, disablePadding: false, label: 'ID' },
    { id: 'name', align: true, numeric: false, disablePadding: false, label: 'Product Name' },
    { id: 'category', align: true, numeric: false, disablePadding: false, label: 'Category' },
    { id: 'price', align: true, numeric: true, disablePadding: false, label: 'Price' },
    { id: 'date', align: false, numeric: false, disablePadding: false, label: 'Date' },
    { id: 'quantity', align: false, numeric: true, disablePadding: false, label: 'QTY' },
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
                Product List
            </Typography>
            <Divider />

            <Toolbar>
                <Grid item xs={12} sm={6}>
                    <OutlinedInput
                        className={classes.searchInput}
                        id="input-search-header"
                        placeholder="Search Product"
                        startAdornment={
                            <InputAdornment position="start">
                                <IconSearch stroke={1.5} size="1rem" className={classes.startAdornment} />
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

const Product = () => {
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
                                            <TableCell align="center" onClick={(event) => handleClick(event, row.name)}>
                                                <Typography variant="h5">#{row.id}</Typography>
                                            </TableCell>
                                            <TableCell padding="normal" onClick={(event) => handleClick(event, row.name)}>
                                                <Typography variant="h5">{row.name}</Typography>
                                            </TableCell>
                                            <TableCell align="left">{row.category}</TableCell>
                                            <TableCell align="left">{row.price}</TableCell>
                                            <TableCell align="center">{row.date}</TableCell>
                                            <TableCell align="center">{row.quantity}</TableCell>
                                            <TableCell align="center">
                                                <IconButton aria-label="visible" className={classes.visibleAction}>
                                                    <MoreHorizIcon />
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
};

export default Product;
