import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        width: ' 100%',
        webkitBoxPack: 'justify',
        justifyContent: 'space-between',
        webkitBoxAlign: 'center',
        alignItems: 'center',
        borderRadius: '12px',
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    content: {
        margin: '0 15px'
    },
    data: {
        fontSize: 21,
        fontWeight: 500,
        color: 'black',
        marginBottom: '5px'
    },
    title: {
        fontSize: 14,
        fontWeight: 400
    },
    img: {
        padding: '25px 0',
        textAlign: 'center',
        color: 'white'
    },

    bgPuple: {
        backgroundColor: 'rgb(103, 58, 183)'
    },
    bgBlue: {
        backgroundColor: 'rgb(30, 136, 229)'
    },
    bgRed: {
        backgroundColor: 'rgb(216, 67, 21)'
    },
    bgGreen: {
        backgroundColor: 'rgb(0, 200, 83)'
    },
    puple: {
        color: 'rgb(103, 58, 183)'
    },
    blue: {
        color: 'rgb(30, 136, 229)'
    },
    red: {
        color: 'rgb(216, 67, 21)'
    },
    green: {
        color: 'rgb(0, 200, 83)'
    }
}));

export default function BoxUser({ data }) {
    const classes = useStyles();

    return (
        <Grid container>
            <div className={classes.root}>
                <Grid item xs={4} className={classes[data.bgColor]}>
                    <div className={classes.img}>{data.img}</div>
                </Grid>
                <Grid item xs={8}>
                    <div className={classes.content}>
                        <div className={classes.data}>{data.data}</div>
                        <div className={classes.title}>
                            {data.title} <span className={classes[data.color]}>{data.statistics}</span>{' '}
                        </div>
                    </div>
                </Grid>
            </div>
        </Grid>
    );
}
