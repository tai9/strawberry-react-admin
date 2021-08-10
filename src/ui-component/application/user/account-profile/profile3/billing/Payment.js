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
