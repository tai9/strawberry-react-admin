import React from 'react';
import { makeStyles } from '@material-ui/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

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
    social: {
        padding: '20px'
    },
    socialItem: {
        paddingBottom: '0',
        alignItems: 'center',
        display: 'flex'
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

export default function SocialInfo() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.header}>
                <div className={classes.title}>Social Information</div>
            </div>
            <hr className={classes.tagHr} />
            <div className={classes.social}>
                <Grid container className={classes.socialItem}>
                    <Grid item xs={1}>
                        {' '}
                        <FacebookIcon />
                    </Grid>{' '}
                    <Grid className={classes.inputItem} item xs={7} sm={9}>
                        {' '}
                        <TextField id="outlined-search" label="Facebook Profile Url" type="search" variant="outlined" />
                    </Grid>
                    <Grid className={classes.btn} item sm={2} xs={3}>
                        <Button variant="contained" color="secondary" size="small">
                            Connect
                        </Button>
                    </Grid>
                </Grid>{' '}
                <Grid container className={classes.socialItem}>
                    <Grid item xs={1}>
                        {' '}
                        <TwitterIcon />
                    </Grid>{' '}
                    <Grid className={classes.inputItem} item xs={7} sm={9}>
                        {' '}
                        <TextField id="outlined-search" label="Twitter Profile Url" type="search" variant="outlined" />
                    </Grid>
                    <Grid className={classes.btn} item xs={3} sm={2}>
                        <Button variant="contained" color="secondary" size="small">
                            Connect
                        </Button>
                    </Grid>
                </Grid>{' '}
                <Grid container className={classes.socialItem}>
                    <Grid item xs={1}>
                        {' '}
                        <LinkedInIcon />
                    </Grid>{' '}
                    <Grid className={classes.inputItem} item xs={7} sm={9}>
                        {' '}
                        <TextField id="outlined-search" label=" LinkedIn Profile Url" type="search" variant="outlined" />
                    </Grid>
                    <Grid className={classes.btn} item xs={3} sm={2}>
                        <Button variant="contained" color="secondary" size="small">
                            Connect
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
