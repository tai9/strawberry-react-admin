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
    inputValue: {
        padding: '20px'
    },
    inputItem: {
        display: 'inline-flex',
        flexDirection: 'column',
        position: 'relative',
        padding: '10px',
        verticalAlign: 'top',
        width: '100%'
    },
    btn: { margin: '13px' }
}));

const Edit = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.header}>
                <div className={classes.title}>Edit Account Detail</div>
            </div>
            <hr className={classes.tagHr} />
            <div className={classes.inputValue}>
                <Grid container>
                    <Grid className={classes.inputItem} xs={12} md={12}>
                        <TextField required id="outlined-required" label="Name" defaultValue="Josephine" variant="outlined" />
                    </Grid>
                    <Grid className={classes.inputItem} xs={12} md={12}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Email Address"
                            defaultValue="name@example.com"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid className={classes.inputItem} xs={12} md={6}>
                        <TextField required id="outlined-required" label="Company" defaultValue="Materially Inc." variant="outlined" />
                    </Grid>

                    <Grid className={classes.inputItem} xs={12} md={6}>
                        <TextField required id="outlined-required" label="Country" defaultValue="USA" variant="outlined" />
                    </Grid>
                    <Grid className={classes.inputItem} xs={12} md={6}>
                        <TextField required id="outlined-required" label="Phone Number" defaultValue="4578-420-410" variant="outlined" />
                    </Grid>
                    <Grid className={classes.inputItem} xs={12} md={6}>
                        <TextField required id="outlined-required" label="Birthday" defaultValue="31/01/2001" variant="outlined" />
                    </Grid>
                    <Button className={classes.btn} variant="contained" color="primary">
                        Change Details
                    </Button>
                </Grid>
            </div>
        </div>
    );
};
export default Edit;
