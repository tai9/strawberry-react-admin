import React from 'react';

//material-ui
import { makeStyles } from '@material-ui/styles';
import { Paper, Divider, List, ListItem, ListItemIcon, ListItemText, CardHeader } from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';

// assets
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

//-----------------------|| TOTAL REVENUE ||-----------------------//

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '20px',
        backgroundColor: '#ffffff',
        position: 'relative',
        borderRadius: '15px'
    },
    header: {
        fontSize: '20px',
        color: '#000000'
    },
    increaseIcon: {
        color: '#00c853'
    },
    decreaseIcon: {
        color: '#f44336'
    },
    increaseText: {
        color: '#00c853',
        float: 'right',
        paddingRight: '10px'
    },
    decreaseText: {
        color: '#f44336 !important',
        float: 'right !important',
        paddingRight: '10px'
    },
    scrollHeight: {
        height: '400px',
        paddingLeft: '16px',
        paddingRight: '16px'
    },
    itemList:{
        paddingLeft : 10
    }
}));

const Revenue = (theme) => {
    const classes = useStyles();
    return (
        <>
            <ListItem button>
                <ListItemIcon>
                    <ArrowDropUpIcon className={classes.increaseIcon} />
                </ListItemIcon>
                <ListItemText inset className={classes.itemList}>
                    Bitcoin
                    <span className={classes.increaseText}>+ $145.86</span>
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <ArrowDropDownIcon className={classes.decreaseIcon} />
                </ListItemIcon>
                <ListItemText inset className={classes.itemList}>
                    Ethereum
                    <span className={classes.decreaseText}>- $12.39</span>
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <ArrowDropUpIcon className={classes.increaseIcon} />
                </ListItemIcon>
                <ListItemText inset className={classes.itemList}>
                    Ripple
                    <span className={classes.increaseText}>+ $47.26</span>
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <ArrowDropDownIcon className={classes.decreaseIcon} />
                </ListItemIcon>
                <ListItemText inset className={classes.itemList}>
                    Neo
                    <span className={classes.decreaseText}>- $6.398</span>
                </ListItemText>
            </ListItem>
        </>
    );
};

const TotalRevenue = (theme) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <CardHeader title="Total Revenue"></CardHeader>
            <Divider />
            <List>
                <PerfectScrollbar component="div" className={classes.scrollHeight}>
                    <Revenue />
                    <Revenue />
                    <Revenue />
                </PerfectScrollbar>
            </List>
        </Paper>
    );
};

export default TotalRevenue;
