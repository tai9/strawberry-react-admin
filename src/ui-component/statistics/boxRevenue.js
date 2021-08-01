import React from 'react';

//material-ui
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        width: ' 100%',
        webkitBoxPack: 'justify',
        justifyContent: 'space-between',
        webkitBoxAlign: 'center',
        alignItems: 'center',
        padding: '20px'
    },
    content: {
        display: 'inline-block'
    },
    data: {
        fontSize: 21,
        fontWeight: 500,
        margin: '8px 0'
    },
    title: {
        fontSize: 14,
        fontWeight: 400
    },
    bgPuple: {
        backgroundColor: 'rgb(103, 58, 183)'
    },
    bgBlue: {
        backgroundColor: 'rgb(30, 136, 229)'
    },
    bgRed: {
        backgroundColor: 'rgb(216, 67, 21)'
    }
}));

export default function BoxRevenue({ data }) {
    const classes = useStyles();

    return (
        <Paper className={classes[data.background]}>
            <div className={classes.root}>
                <div className={classes.content}>
                    <div className={classes.title}>{data.title}</div>
                    <div className={classes.data}>{data.data}</div>
                    <div className={classes.title}>{data.statistics}</div>
                </div>
                <div>{data.img}</div>
            </div>
        </Paper>
    );
}
