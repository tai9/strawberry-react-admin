import React from 'react';

//material ui
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
        fontSize: '15px',
        fontWeight: '500',
        color: 'black',
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
    btnSubmit: { display: 'flex', padding: '10px' },
    content: {
        padding: '20px 10px'
    }
}));
const Change = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.header}>
                <div className={classes.title}>Change Password</div>
            </div>
            <hr className={classes.tagHr} />
            <div className={classes.content}>
                <Grid container>
                    <Grid className={classes.inputItem} xs={12}>
                        <TextField required id="outlined-required" label="Current Password" variant="outlined" />
                    </Grid>
                    <Grid className={classes.inputItem} xs={12} md={6}>
                        <TextField required id="outlined-required" label="New Password" variant="outlined" />
                    </Grid>
                    <Grid className={classes.inputItem} xs={12} md={6}>
                        <TextField required id="outlined-required" label="Re-enter New Password" variant="outlined" />
                    </Grid>
                </Grid>
                <div className={classes.btnSubmit}>
                    <Button variant="contained" color="primary">
                        Change Password
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default Change;
