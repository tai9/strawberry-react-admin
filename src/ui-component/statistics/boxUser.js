import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
// import Paper from '@material-ui/core/Paper';
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
        borderRadius: '12px'
    },
    content: {
        margin: 10,
        display: 'inline-block'
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
    }
}));

export default function BoxUser({ res }) {
    const classes = useStyles();

    return (
        <Grid container>
            <div className={classes.root}>
                <Grid item xs={4}>
                    <div style={{ backgroundColor: 'purple', padding: '15px 0', textAlign: 'center' }}>
                        <AccountCircleTwoToneIcon style={{ fontSize: '30px' }} />
                    </div>
                </Grid>
                <Grid style={{ backgroundColor: 'white' }} item xs={8}>
                    <div className={classes.content}>
                        <div className={classes.data}>2,672</div>
                        <div className={classes.title}>Last week users</div>
                    </div>
                </Grid>
            </div>
        </Grid>
    );
}
