import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        width: ' 100%',
        webkitBoxPack: 'justify',
        justifyContent: 'space-between',
        webkitBoxAlign: 'center',
        alignItems: 'center'
    },
    content: {
        margin: 10,
        display: 'inline-block'
    },
    data: {
        fontSize: 21,
        fontWeight: 500,
        color: 'black',
        margin: '10px 0'
    },
    title: {
        fontSize: 15,
        fontWeight: 400
    },
    img: {
        width: '50px',
        height: '50px',
        display: ' inline-flex',
        overflow: 'hidden',
        position: 'relative',
        alignItems: 'center',
        borderRadius: '50%',
        justifyContent: 'center'
    },
    bgBlue: {
        backgroundColor: 'rgb(33, 150, 243)',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: '0.2',
        zIndex: 1,
        position: 'absolute'
    },
    bgGreen: {
        backgroundColor: 'rgb(0, 200, 83)',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: '0.2',
        zIndex: 1,
        position: 'absolute'
    },
    bgYellow: {
        backgroundColor: 'rgb(255, 193, 7)',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: '0.2',
        zIndex: 1,
        position: 'absolute'
    }
}));

export default function ImpressionsCard({ data }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <div className={classes.title}>{data.title}</div>
                <div className={classes.data}>{data.data}</div>
                <div className={classes.title}>{data.time}</div>
            </div>
            <div className={classes.img}>
                <span className={classes[data.bgColor]}></span>

                <span>{data.img}</span>
            </div>
        </div>
    );
}
