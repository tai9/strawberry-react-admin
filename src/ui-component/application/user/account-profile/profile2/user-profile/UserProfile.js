import { Avatar } from '@material-ui/core';
import React from 'react';

// asset
import man1 from '../../../../../../assets/images/avatars/man1.png';
import ErrorTwoToneIcon from '@material-ui/icons/ErrorTwoTone';

// material-ui
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    borderAvatar: {
        width: '80px',
        height: '80px'
    },
    avatar: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        objectFit: 'cover',
        color: 'transparent',
        textIndent: '10000px'
    },
    limitUpload: {
        margin: '0px',
        fontSize: '0.75rem',
        color: 'rgb(158, 158, 158)',
        fontWeight: '400',
        fontFamily: 'Roboto, sans-serif',
        lineHeight: '1.66'
    },
    iconErr: {
        width: '16px',
        height: '16px',
        marginRight: '8px',
        verticalAlign: 'text-bottom'
    },
    headerProfile: {
        boxSizing: 'border-box',
        display: 'flex',
        flexFlow: 'row wrap',
        marginTop: '0px',
        width: 'calc(100% + 16px)',
        alignItems: 'center',
        marginBottom: '20px'
    },
    infoImage: {
        marginLeft: '20px'
    },
    borderImg: {
        marginBottom: '8px'
    },
    textInfo: {
        width: '100%'
    },
    userProfile: {
        paddingLeft: '0px'
    }
}));

const UserProfile = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.userProfile}>
                <div className={classes.headerProfile}>
                    <div className={classes.borderAvatar}>
                        <Avatar className={classes.avatar} alt="man1" src={man1} />
                    </div>
                    <div className={classes.infoImage}>
                        <div className={classes.borderImg}>
                            <input accept="image/*" multiple type="file" />
                        </div>
                        <span className={classes.limitUpload}>
                            <ErrorTwoToneIcon className={classes.iconErr} />
                            Image size Limit should be 125kb Max.
                        </span>
                    </div>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.textInfo}
                            id="outlined-basic"
                            defaultValue="Schorl"
                            label="Last Name"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.textInfo}
                            id="outlined-basic"
                            defaultValue="Delaney"
                            label="First Name"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.textInfo}
                            id="outlined-basic"
                            defaultValue="demo@company.com"
                            label="Email Address"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.textInfo}
                            id="outlined-basic"
                            defaultValue="000-00-00000"
                            label="Phone Number"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.textInfo}
                            id="outlined-basic"
                            defaultValue="company.ltd"
                            label="Company Name"
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.textInfo}
                            id="outlined-basic"
                            defaultValue="www.company.com"
                            label="Site Infomation"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default UserProfile;
