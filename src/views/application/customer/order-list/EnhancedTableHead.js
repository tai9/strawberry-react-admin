import PropTypes from 'prop-types';
import { React} from 'react';

//material-ui
import { makeStyles } from '@material-ui/styles';
import { Typography, TableCell, TableHead, TableRow, TableSortLabel, Checkbox } from '@material-ui/core';

// data _mockApis
import {dataHeader} from '../../../../_mockApis/application/customer/order-list/data'

//-----------------------|| TABLE HEAD ||-----------------------//

const useStyle = makeStyles((theme) => ({
    checkbox: {
        padding: 20
    }
}))

const EnhancedTableHead = (props) => {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    const classStyle = useStyle();

    return (
        <>
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox" className={classStyle.checkbox}>
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
                        dataHeader.map((headCell) => (
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

export default EnhancedTableHead;