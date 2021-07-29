import React from 'react';
import { makeStyles } from '@material-ui/styles';
import HomeIcon from '@material-ui/icons/Home';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { purple } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
    root: {
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        webkitBoxPack: 'justify',
        justifyContent: 'space-between',
        webkiBoxAlign: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 500,
        margin: 10,
        color: 'black'
    },
    list: {
        display: 'flex',
        flexWrap: 'wrap',
        webkitBoxAlign: 'center',
        alignItems: 'center',
        padding: 0,
        margin: 0,
        listStyle: 'none'
    },
    item: {
        margin: '5px',
        color: 'gray'
    }
}));

export default function HeaderStatistics() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>Statistics</div>

            <div className={classes.link}>
                <ol className={classes.list}>
                    <li className={classes.item}>
                        <HomeIcon style={{ color: purple[500] }} />
                    </li>
                    <li className={classes.item}>
                        <ArrowForwardIosIcon fontSize="small" />
                    </li>
                    <li className={classes.item}>Statistics</li>
                </ol>
            </div>
        </div>
    );
}
