import React from 'react';

//material-ui
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: ' 100%',
        webkitBoxAlign: 'center',
        textAlign: 'center',
        padding: '10px'
    },
    data: {
        fontSize: 21,
        fontWeight: 500,
        color: 'black',
        margin: '14px 0',
        webkitBoxAlign: 'center'
    },
    title: {
        fontSize: 14,
        fontWeight: 500
    }
}));

export default function BoxUpDown({ res }) {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <div className={classes.title}>{res.title}</div>
            </Grid>{' '}
            <Grid item xs={12}>
                {' '}
                <div className={classes.data}>
                    {res.img}
                    {res.data}
                </div>
            </Grid>
            <Grid item xs={12}>
                {' '}
                <div className={classes.statistics}>{res.statistics}</div>
            </Grid>
        </Grid>
    );
}
