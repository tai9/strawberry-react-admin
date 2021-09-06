import * as React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

// asset
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import { Button } from '@material-ui/core';
import CreditCardTwoToneIcon from '@material-ui/icons/CreditCardTwoTone';

const useStyles = makeStyles((theme) => ({
    textInfo: {
        width: '100%'
    },
    checkBox: {
        marginTop: '24px'
    },
    titleBesideIconLocks: {
        margin: '0px',
        fontSize: '0.875rem',
        color: 'rgb(33, 33, 33)',
        fontWeight: '500',
        fontFamily: 'Roboto, sans-serif',
        lineHeight: '1.334'
    },
    titleUnderIconLocks: {
        margin: '0px',
        fontSize: '0.75rem',
        color: 'rgb(158, 158, 158)',
        fontWeight: '400',
        fontFamily: 'Roboto, sans-serif',
        lineHeight: '1.66'
    },
    iconLocks: {
        userSelect: 'none',
        display: 'inline-block',
        fill: 'currentcolor',
        flexShrink: '0',
        transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        fontSize: '1.5rem',
        width: '50px',
        height: '50px',
        color: 'rgb(33, 150, 243)'
    },
    formLocks: {
        boxSizing: 'border-box',
        display: 'flex',
        flexFlow: 'row wrap',
        marginTop: '20px',
        width: 'calc(100% + 16px)',
        alignItems: 'center'
    },
    title: {
        marginLeft: '20px'
    },
    iconCreditCard: {
        marginRight: '10px'
    },
    formBtn: {
        marginTop: '20px'
    },
    formText: {
        minHeight: '210px'
    },
    contentPayMent: {
        marginTop: '25px'
    }
}));

const PayMent = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = () => {
        setChecked2((prev) => !prev);
        setChecked((prev) => !prev);
    };

    const [checked2, setChecked2] = React.useState(false);

    const handleChange2 = () => {
        setChecked2((prev) => !prev);
        setChecked((prev) => !prev);
    };

    return (
        <>
            <div>
                <FormControlLabel
                    value="Visa Credit/Debit Card"
                    control={<Radio checked={checked} onChange={handleChange} />}
                    label="Visa Credit/Debit Card"
                />
                <FormControlLabel value="PayPal" control={<Radio checked={checked2} onChange={handleChange2} />} label="PayPal" />

                <div className={classes.contentPayMent}>
                    <Collapse in={checked}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={classes.textInfo}
                                    id="outlined-basic"
                                    defaultValue="Selena Litten"
                                    label="Name on card"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={classes.textInfo}
                                    id="outlined-basic"
                                    defaultValue="30529399"
                                    label="Card Number"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={classes.textInfo}
                                    id="outlined-basic"
                                    defaultValue="12/22"
                                    label="Expiry Date"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={classes.textInfo}
                                    id="outlined-basic"
                                    defaultValue="123"
                                    label="CCV Code"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                        <div className={classes.formLocks}>
                            <div>
                                <LockTwoToneIcon className={classes.iconLocks} />
                            </div>
                            <div className={classes.title}>
                                <h5 className={classes.titleBesideIconLocks}>Secure Checkout</h5>
                                <span className={classes.titleUnderIconLocks}>Secure by Google.</span>
                            </div>
                        </div>
                        <div className={classes.formBtn}>
                            <Button variant="outlined" color="primary">
                                <CreditCardTwoToneIcon className={classes.iconCreditCard} /> Add New card
                            </Button>
                        </div>
                    </Collapse>
                </div>
                <div>
                    <Collapse in={checked2}>
                        <div className={classes.formText}>
                            <TextField
                                className={classes.textInfo}
                                id="outlined-basic"
                                defaultValue="demo@company.paypal.com"
                                label="Paypal Mail"
                                variant="outlined"
                            />
                        </div>
                    </Collapse>
                </div>
            </div>
        </>
    );
};

export default PayMent;
