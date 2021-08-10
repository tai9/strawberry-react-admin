import React from 'react';

//material-ui

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'rgb(97, 97, 97)',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        boxShadow: 'none',
        borderRadius: '12px',
        overflow: 'hidden',
        borderLeft: '10px solid rgb(255, 193, 7)',
        borderTopColor: 'rgb(255, 193, 7)',
        borderRightColor: 'rgb(255, 193, 7)',
        borderBottomColor: 'rgb(255, 193, 7)',
        background: 'rgb(255, 248, 225)',
        webkitBoxAlign: 'center',
        alignItems: 'center'
    },
    content: {
        padding: '25px'
    },
    title: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '1.334em',
        fontFamily: 'Roboto, sans-serif',
        color: 'rgb(97, 97, 97)'
    },
    data: {
        margin: '0px 0px 12px',
        fontSize: '1.5rem',
        fontFamily: 'Roboto, sans-serif',
        lineHeight: '1.2',
        color: 'rgb(66, 66, 66)',
        fontWeight: '500'
    },
    link: {
        cursor: 'pointer',
        userSelect: 'none',
        verticalAlign: 'middle',
        appearance: 'none',
        textDecoration: 'none',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '0.875rem',
        minWidth: '64px',
        transition:
            ' background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        boxShadow: 'none',
        fontWeight: '500',
        textTransform: 'capitalize',
        color: 'rgb(255, 193, 7)',
        padding: '0px'
    }
}));

const CardTotal = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {' '}
            <div className={classes.content}>
                {' '}
                <div className={classes.title}>Total Credits</div>
                <div className={classes.data}>1570 GB0</div>
                <a className={classes.link} href="/#">
                    Full Report &#8594;
                </a>
            </div>
        </div>
    );
};
export default CardTotal;
