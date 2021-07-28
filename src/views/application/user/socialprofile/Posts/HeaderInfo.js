import { Avatar } from '@material-ui/core';
import React from 'react';

// icons MoreVertSharp
import MoreVertSharpIcon from '@material-ui/icons/MoreVertSharp';

// simple menu
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// material-ui
import { makeStyles } from '@material-ui/styles';

// style constant
const useStyles = makeStyles((theme) => ({
    post: {
        // paddingTop: '24px'
    },
    postContent: {
        // background: 'white',
        // padding: '24px',
        // borderRadius: '12px'
    },
    dots: {
        fontSize: '40px',
        margin: '0px',
        padding: '0px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '400',
        color: 'rgb(158, 158, 158)',
        textAlign: 'left'
    },
    nameStatus: {
        display: 'flex'
    },
    avataName: {
        display: 'flex'
    },
    avataNameEdit: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    name: {
        margin: '0px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '500',
        fontSize: '0.875rem',
        lineHeight: '1.334',
        color: 'rgb(33, 33, 33)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '10px',
        marginLeft: '10px'
    },
    btnEditDelete: {
        cursor: 'pointer'
    },
    btnThereDots: {
        backgroundColor: '#ede7f6',
        color: '#5e35b1',
        height: '22px',
        width: '22px',
        transition: 'all .2s ease-in-out',
        borderRadius: '8px',
        '&:hover': {
            backgroundColor: '#5e35b1',
            color: 'white'
        }
    },
    btnCover: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

const HeaderInfo = (post) => {
    const classes = useStyles();

    // simple menu
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <div className={classes.post}>
                <div className={classes.postContent}>
                    {/* avatar, name, time, editButton */}
                    <div className={classes.avataNameEdit}>
                        <div className={classes.avataName}>
                            <Avatar alt="avatar" src={post.avatar} />
                            <div className={classes.nameStatus}>
                                <div className={classes.name}>John Doe</div>
                                <div>
                                    <span className={classes.dots}>.</span>
                                    <span>now</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.btnCover}>
                            <div className={classes.btnEditDelete} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                <MoreVertSharpIcon className={classes.btnThereDots} />
                            </div>
                            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                                <MenuItem onClick={handleClose}>Edit</MenuItem>
                                <MenuItem onClick={handleClose}>Delete</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HeaderInfo;
