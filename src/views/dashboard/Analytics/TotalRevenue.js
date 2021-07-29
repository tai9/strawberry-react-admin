import React from 'react';

//material-ui
import { makeStyles } from '@material-ui/styles';
import { Paper, Divider } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PerfectScrollbar from 'react-perfect-scrollbar';
import CardHeader from '@material-ui/core/CardHeader';

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
    ScrollHeight: {
        height: '450px',
        paddingLeft: '16px',
        paddingRight: '16px'
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
                <ListItemText inset primary="Bitcoin" />
                <ListItemText inset>
                    <span className={classes.increaseText}>+ $145.86</span>
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <ArrowDropDownIcon className={classes.decreaseIcon} />
                </ListItemIcon>
                <ListItemText inset primary="Ethereum" />
                <ListItemText inset>
                    <span className={classes.decreaseText}>- $12.39</span>
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <ArrowDropUpIcon className={classes.increaseIcon} />
                </ListItemIcon>
                <ListItemText inset primary="Ripple" />
                <ListItemText inset>
                    <span className={classes.increaseText}>+ $47.26</span>
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <ArrowDropDownIcon className={classes.decreaseIcon} />
                </ListItemIcon>
                <ListItemText inset primary="Neo" />
                <ListItemText inset>
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
                <PerfectScrollbar component="div" className={classes.ScrollHeight}>
                    <Revenue />
                    <Revenue />
                    <Revenue />
                </PerfectScrollbar>
            </List>
        </Paper>
    );
};

export default TotalRevenue;
