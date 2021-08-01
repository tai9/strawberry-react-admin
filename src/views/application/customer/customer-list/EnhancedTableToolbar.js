import PropTypes from 'prop-types';
import { React } from 'react';

//material-ui
import { makeStyles } from '@material-ui/styles';
import { InputAdornment, OutlinedInput, Typography, Grid, Divider, Toolbar } from '@material-ui/core';

// assets - material-icons
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';
import PrintTwoToneIcon from '@material-ui/icons/PrintTwoTone';
import FileCopyTwoToneIcon from '@material-ui/icons/FileCopyTwoTone';

// table-icons
import { IconSearch } from '@tabler/icons';

//-----------------------|| TABLE TOOLBAR ||-----------------------//


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

const EnhancedTableToolbar = ({handleFilter}) => {
    const classes = useToolbarStyles();

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
                        onChange = {handleFilter}
                        placeholder="Search customer"
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

export default EnhancedTableToolbar;