import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        padding: '20px'
    },
    title: {
        fontSize: '15px',
        fontWeight: '500',
        color: 'black',
        flex: '1 1 auto'
    },
    tagHr: {
        margin: '0px',
        borderWidth: '0px 0px thin',
        borderStyle: 'solid',
        borderColor: 'rgb(238, 238, 238)',
        opacity: 1
    },

    btn: { padding: '4px 6px ' },
    paymentItem: {
        padding: '24px 0',
        boxSizing: 'border-box',
        display: 'flex',
        flexFlow: 'row wrap',
        width: 'calc(100% + -15px)',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    infor: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '10px'
    },
    content: {
        padding: '0 24px'
    },
    name: { fontSize: '0.875rem', fontWeight: '500', color: 'rgb(33, 33, 33)', fontFamily: 'Roboto, sans-serif' },
    number: { fontSize: ' 0.75rem', fontWeight: '400', color: 'rgb(158, 158, 158)', fontFamily: 'Roboto, sans-serif' },
    func: { display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' },
    status: {
        marginRight: '10px',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '0.8125rem',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgb(97, 97, 97)',
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
        borderRadius: '16px',
        whiteSpace: 'nowrap',
        transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0,0.2, 1) 0ms',
        verticalAlign: 'middle'
    },
    text: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        padding: '8px',
        whiteSpace: 'nowrap'
    },
    edit: {
        marginLeft: '10px',
        color: 'rgb(33, 150, 243)',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer'
        }
    },
    editStatus: {
        marginRight: '10px',
        color: 'rgb(103, 58, 183)',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer'
        }
    }
}));

const Payment = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.header}>
                <div className={classes.title}>Payment Methods</div>
                <Button className={classes.btn} variant="contained" color="primary">
                    Add New Method
                </Button>
            </div>
            <hr className={classes.tagHr} />
            <div className={classes.content}></div>
            <Grid container>
                <Grid item xs={12}>
                    <div className={classes.paymentItem}>
                        <div className={classes.infor}>
                            <img
                                className={classes.avt}
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA5dJREFUeJzt2U1oE1sUB/D/ndiJg03a6JjYCs8krdVWR6y0RUWoPHi+RTfyMKC7IIpKQUQponajYC1BBMWFuGh1IVLbjYgWpIsXkLdoYunTflCtoZpSYzvUWpNOPpwZtypCbqZtEs39LYdzZs49M3NzbwZgGIZhGIZhGIZhGKbQkEyCPR6PaXR0VBQEIaO8bFEURa+urpa7u7tV2hzqgTQ0NDRrmnZFVVULAN1QhcuP8Dw/r6pqSzAYvE2VQBNUV1d3WBTFGz6fb1VVVRUIycsHALquY2xsDC0tLTFZlo8NDAzcS5djojmx0+l81NbWtkaSpLwdPAAQQiCKIiorK3m/378jHA5fT5fD0Zx4YWGhzOVyLb7CLHG73YjFYutpYqkaACCv7/yPOI4DoSyYugG/q4JvwArKONLR0QGz2bysxSyVeDwOXdepXgHaBqCnp8d4RTlACKF6uqkbUFRUZLyaHEgkElSLtYKfAwq+AdSTYCqV+mXWArquL/kkqHV2dnJWq3URZWXP3NwcvF4v1Y6QehJ0OBwoLS01XlUWmc1m6qe14OcA1oBcF5BrrAG5LiDXqH8FvtXc3Izh4eHvjjkcDnR1dS1JUdlkqAHt7e1QFOW7Y0u2U9RVcJ/7wEWuQSs7h1B8N7w3J3HkTxtevItjh1uA7+EMildy8F+swNVHM3j6fxRPW10wsk4z1ACLxQKLxWIkNT1igmb9G+PhMDbO96HzWTXcDh7/jsTgtPO4cD+C4/vWwLt3NWIJDTeeyFA14K2chHMtn/HlDDWgv78f09PT1PGNjY0ZN+z5vAdjHx7jrn8W3ac34MitSXh2lWBTeRlO3ZnCzKcvqFjHY8/mVVCSGoJvlOw1IBAIYGJigjpekqSMG7B3SzH+OLEV251FqCo349VUAvaSFfjwKY6/thVjdDKOvpdRzEa/IJECNpWbcWBnSYYjWcQkuNzWWk24fKgcdRUCPisaLh1cB4tgwst3cbjsPM7ut+PBf3M4/48dr98nMBBS0p/0J6imjdraWrW3t5ez2WyGLpJtsiyjqakpNTg4mPadoFoHCIIwFQqFFl9ZloyPj0MQhEmaWKovQ6IoysFgcJ8kSbwoinn7v4CmaRgaGkJra2ssGo2ejEQiw+lyqEdSX19/lBDiSyaTeb0n5nl+Vtf1M4FA4A5NfKa3ktTU1NgEQcjLJbSiKNrIyMhH5O/Xa4ZhGIZhGIZhGIZh8sBXCCkbVrB+344AAAAASUVORK5CYII="
                                alt="avt"
                            />
                            <div className={classes.info}>
                                <div className={classes.name}>Visa card</div>
                                <div className={classes.number}>Ending in 5269 07XX XXXX 8110</div>
                            </div>
                        </div>
                        <div className={classes.func}>
                            <div className={classes.status}>
                                <span className={classes.text}>Default</span>
                            </div>
                            &#10072;
                            <a href="/#" className={classes.edit}>
                                Edit
                            </a>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <hr className={classes.tagHr} />
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.paymentItem}>
                        <div className={classes.infor}>
                            <img
                                className={classes.avt}
                                src="data:image/png;base64,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"
                                alt="avt"
                            />
                            <div className={classes.info}>
                                <div className={classes.name}>Discover</div>
                                <div className={classes.number}>Ending in 6109 07XX XXXX 8020</div>
                            </div>
                        </div>
                        <div className={classes.func}>
                            <a href="/#" className={classes.editStatus}>
                                Make Defalt
                            </a>
                            &#10072;
                            <a href="/#" className={classes.edit}>
                                Edit
                            </a>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <hr className={classes.tagHr} />
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.paymentItem}>
                        <div className={classes.infor}>
                            <img
                                className={classes.avt}
                                src="data:image/png;base64,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"
                                alt="avt"
                            />
                            <div className={classes.info}>
                                <div className={classes.name}>Mastercard</div>
                                <div className={classes.number}>Ending in 7278 07XX XXXX 4290</div>
                            </div>
                        </div>
                        <div className={classes.func}>
                            <a href="/#" className={classes.editStatus}>
                                Make Defalt
                            </a>
                            &#10072;
                            <a href="/#" className={classes.edit}>
                                Edit
                            </a>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};
export default Payment;
