import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import man2 from '../../../../../../assets/images/avatars/man2.png';

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
    content: { padding: '20px', textAlign: 'center' },
    avt: {
        width: '90px'
    },
    tutorial: {
        fontSize: '0.75rem',
        fontWeight: '400',
        color: 'rgb(158, 158, 158)',
        fontFamily: 'Roboto, sans-serif',
        margin: '10px 0'
    },
    btn: { padding: '4px 6px ' }
}));

const ProfilePicture = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.header}>
                <div className={classes.title}>Profile Picture</div>
            </div>
            <hr className={classes.tagHr} />
            <div className={classes.content}>
                <img className={classes.avt} src={man2} alt="avt" />
                <div className={classes.tutorial}>Upload/Change Your Profile Image</div>
                <Button className={classes.btn} variant="contained" color="primary">
                    Upload Avatar
                </Button>
            </div>
        </div>
    );
};
export default ProfilePicture;
