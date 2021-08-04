import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

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
    }
}));

export default function ContactInfo() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.header}>
                <div className={classes.title}>Contact Information</div>
            </div>
            <hr className={classes.tagHr} />
            <div className={classes.inputValue}>
                <Grid container>
                    <Grid className={classes.inputItem} xs={12} md={6}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Contact Phone"
                            defaultValue="(+99) 9999 999 999"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid className={classes.inputItem} xs={12} md={6}>
                        <TextField required id="outlined-required" label="Email" defaultValue="demo@sample.com" variant="outlined" />
                    </Grid>
                    <Grid className={classes.inputItem} xs={12}>
                        <TextField required id="outlined-required" label="Portfolio Url" defaultValue="Asoka Tana" variant="outlined" />
                    </Grid>
                    <Grid className={classes.inputItem} xs={12}>
                        {' '}
                        <TextField
                            id="outlined-multiline-static"
                            label="Address"
                            multiline
                            rows={3}
                            defaultValue="I consider myself as a creative, professional and a flexible person. I can adapt with any kind of brief and design style"
                            variant="outlined"
                        />{' '}
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
