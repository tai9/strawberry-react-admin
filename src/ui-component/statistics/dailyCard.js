import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
        display: 'flex',
        width: ' 100%',
        webkitBoxAlign: 'center',
        textAlign: 'center',
        padding: '10px',
        position: 'relative'
    },
    data: {
        fontSize: 21,
        fontWeight: 500,
        margin: '14px 0',
        webkitBoxAlign: 'center'
    },
    title: {
        fontSize: 14,
        fontWeight: 500
    },
    img: { left: '-20px', color: '#fff', bottom: '-20px', position: 'absolute', transform: 'rotate(25deg)' },
    bgPuple: {
        backgroundColor: 'rgb(103, 58, 183)'
    },
    bgBlue: {
        backgroundColor: 'rgb(30, 136, 229)'
    },
    bgGreen: {
        backgroundColor: 'rgb(0, 200, 83)'
    }
}));

export default function DailyCard({ data }) {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes[data.bgColor]}>
                <div className={classes.root}>
                    <div className={classes.img}>{data.img}</div>
                    <Grid container>
                        <Grid item xs={12}>
                            {' '}
                            <div className={classes.data}>{data.data}</div>
                        </Grid>
                        <Grid item xs={12}>
                            {' '}
                            <div className={classes.statistics}>{data.title}</div>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        </div>
    );
}
