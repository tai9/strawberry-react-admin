import React from 'react';

//material-ui
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';

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
        margin: '0 15px',
        textAlign: 'center'
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
    bgBlue: {
        backgroundColor: 'rgb(30, 136, 229)'
    }
}));

export default function WeatherCard() {
    const classes = useStyles();

    return (
        <Grid container>
            <div className={classes.root}>
                <Grid item xs={6} className={classes.bgBlue}>
                    <div className={classes.img}>
                        <WbSunnyOutlinedIcon fontSize="large" /> <div className={classes.title}>New York , NY</div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.content}>
                        <div className={classes.data}>19&#176;</div>
                        <div className={classes.title}>Sunny</div>
                    </div>
                </Grid>
            </div>
        </Grid>
    );
}
