import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
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
        alignItems: 'center'
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
    }
}));

export default function BoxRevenue() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <div className={classes.title}>Revenue</div>
                <div className={classes.data}>$42,562</div>
                <div className={classes.title}>$50,032 Last Month</div>
            </div>
            <div>
                <MonetizationOnOutlinedIcon style={{ fontSize: 95, opacity: 0.4 }} />
            </div>
        </div>
    );
}
