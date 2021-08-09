import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Avatar, Button, Grid, Typography, Paper } from '@material-ui/core';

// project imports
import { gridSpacing } from './../../../store/constant';

// assets
import { CallTwoTone, ChatBubbleTwoTone } from '@material-ui/icons';

// style constant
const useStyles = makeStyles((theme) => ({
    paper: {
        borderTop: '1px solid',
        borderBottom: '1px solid',
        padding: '15px 0px',
        borderColor: '#f5f5f5 !important'
    },
    avatar: {
        width: 48,
        height: 48,
        cursor: 'pointer'
    }
}));

//==============================|| CONTACT INFO CARD ||==============================//

const ContactInfoList = ({ data, handleShowInfo }) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} elevation={0}>
            <Grid container item xs={12} rowSpacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid item xs={12} sm container spacing={gridSpacing}>
                        <Grid item xs>
                            <Grid item xs={12} sm container spacing={gridSpacing}>
                                <Grid item>
                                    <Avatar className={classes.avatar} alt="Remy Sharp" src={data.avatar} onClick={handleShowInfo} />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h4">{data.name}</Typography>
                                    <Typography variant="caption">{data.jobTitle}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid item xs={12} container spacing={1}>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        <ChatBubbleTwoTone fontSize="small" />
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="secondary">
                                        <CallTwoTone fontSize="small" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ContactInfoList;
