import React from 'react';
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
        padding: '17px'
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
    img: {
        fontSize: 40,
        opacity: 0.4,
        '&:hover': {
            opacity: 1,
            transform: ' scale(1.1)'
        }
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
    bgBlack: {
        backgroundColor: 'rgb(41, 49, 79)'
    }
}));
export default function BoxSocialFb({ data }) {
    const classes = useStyles();

    return (
        <Paper className={classes[data.bgColor]}>
            <div className={classes.root}>
                <div className={classes.content}>
                    <div className={classes.data}>{data.data}</div>
                    <div className={classes.title}>{data.title}</div>
                </div>
                <div className={classes.img}>{data.img}</div>
            </div>
        </Paper>
    );
}
