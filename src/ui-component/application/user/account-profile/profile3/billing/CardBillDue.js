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
        borderLeft: '10px solid rgb(216, 67, 21)',
        borderTopColor: 'rgb(216, 67, 21)',
        borderRightColor: 'rgb(216, 67, 21)',
        borderBottomColor: 'rgb(216, 67, 21)',
        background: 'rgb(251, 233, 231)',
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
        color: 'rgb(216, 67, 21)',
        padding: '0px'
    }
}));

const CardBillDue = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {' '}
            <div className={classes.content}>
                {' '}
                <div className={classes.title}>Bill Due</div>
                <div className={classes.data}>$150.00</div>
                <a className={classes.link} href="/#">
                    Pay Now &#8594;
                </a>
            </div>
        </div>
    );
};
export default CardBillDue;
