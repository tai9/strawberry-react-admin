import React from 'react';

//material-ui
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import Change from './change';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(97, 97, 97)',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgb(227, 242, 253)',
        marginTop: '20px'
    },
    alert: { borderStyle: 'dashed' }
}));
export default function ChangePass() {
    const classes = useStyles();

    return (
        <div>
            <Alert className={classes.alert} variant="outlined" severity="warning">
                <b>Alert</b> <br />
                Your Password will expire in every 3 months. So change it periodically. <b>Do not share your password</b>
            </Alert>
            <Paper className={classes.paper}>
                <Change />
            </Paper>
        </div>
    );
}
