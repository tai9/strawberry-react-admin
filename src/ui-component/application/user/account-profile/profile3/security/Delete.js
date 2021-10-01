import React from 'react';

//material ui
import { makeStyles } from '@material-ui/styles';
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

    content: {
        padding: '20px'
    },
    btn: {
        border: '1px solid rgba(244, 67, 54, 0.5)',
        color: 'rgb(244, 67, 54)',
        padding: '3px 9px',
        margin: '20px 0',
        '&:hover': {
            background: 'rgba(244, 67, 54, 0.1)',
            border: '1px solid rgba(244, 67, 54, 0.5)'
        }
    }
}));

const Delete = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.header}>
                <div className={classes.title}>Delete Account</div>
            </div>
            <hr className={classes.tagHr} />
            <div className={classes.content}>
                <div>
                    To deactivate your account, first delete its resources. If you are the only owner of any teams, either assign another
                    owner or deactivate the team.
                </div>
                <Button className={classes.btn} variant="outlined">
                    Deactivate Account
                </Button>
            </div>
        </div>
    );
};
export default Delete;
