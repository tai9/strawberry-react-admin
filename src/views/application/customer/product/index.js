import { React, useState } from 'react';

//material-ui
import { makeStyles } from '@material-ui/styles';
import { Typography, TableBody, Table, TableCell, TableContainer, TablePagination, TableRow, Checkbox, Paper, IconButton } from '@material-ui/core';

// assets
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

// data _mockApis
import {productListData} from '../../../../_mockApis/application/customer/product/data'

// project import
import EnhancedTableHead from './EnhancedTableHead'
import EnhancedTableToolbar from './EnhancedTableToolbar'

//-----------------------|| PRODUCT ||-----------------------//

const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

const getComparator = (order, orderBy) => {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

const stableSort = (array, comparator) => {
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
    },
    checkbox: {
        padding: 20
    }
}));

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
            const newSelecteds = productListData.map((n) => n.name);
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

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, productListData.length - page * rowsPerPage);

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
                            rowCount={productListData.length}
                        />
                        <TableBody>
                            {stableSort(productListData, getComparator(order, orderBy))
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
                                                className={classes.checkbox}
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
                                            <TableCell align="center">{row.price}$</TableCell>
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
                    count={productListData.length}
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
