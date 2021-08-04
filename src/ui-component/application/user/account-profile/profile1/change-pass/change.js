import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        padding: '20px'
    },
    title: {
        fontSize: '0.875rem',
        color: 'rgb(33, 33, 33)',
        fontWeight: '500',
        fontFamily: ' Roboto, sans-serif',
        flex: '1 1 auto'
    },
    tagHr: {
        margin: '0px',
        flexShrink: 0,
        borderWidth: '0px 0px thin',
        borderStyle: 'solid',
        opacity: 1,
        borderColor: ' rgb(227, 242, 253)'
    },
    inputItem: {
        display: 'inline-flex',
        flexDirection: 'column',
        position: 'relative',
        padding: '10px',
        verticalAlign: 'top',
        width: '100%'
    },
    btnSubmit: { display: 'flex', justifyContent: 'flex-end', padding: '10px' },
    clear: { marginLeft: '5px' }
}));

export default function Change() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.header}>
                <div className={classes.title}>Change Password</div>
            </div>
            <hr className={classes.tagHr} />
            <Grid container>
                <Grid className={classes.inputItem} xs={12} md={6}>
                    <TextField required id="outlined-required" label="Current Password" variant="outlined" />
                </Grid>
                <Grid className={classes.inputItem} xs={12} md={6}>
                    <div style={{ display: 'none' }}></div>
                </Grid>
                <Grid className={classes.inputItem} xs={12} md={6}>
                    <TextField required id="outlined-required" label="New Password" variant="outlined" />
                </Grid>
                <Grid className={classes.inputItem} xs={12} md={6}>
                    <TextField required id="outlined-required" label="Confirm Password" variant="outlined" />
                </Grid>
            </Grid>{' '}
            <div className={classes.btnSubmit}>
                <div className={classes.update}>
                    <Button variant="contained" color="primary">
                        Change Password
                    </Button>
                </div>{' '}
                <div className={classes.clear}>
                    <Button color="primary">Clear</Button>
                </div>
            </div>
        </div>
    );
}
