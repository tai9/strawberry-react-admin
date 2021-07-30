import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import PinDropTwoToneIcon from '@material-ui/icons/PinDropTwoTone';
import MoreHorizTwoToneIcon from '@material-ui/icons/MoreHorizTwoTone';

// menu material-ui
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import Grid from '@material-ui/core/Grid';

import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    adressDetail: {
        margin: '2px 0px 0px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '400',
        fontSize: '0.75rem',
        lineHeight: '1.57',
        color: 'rgb(158, 158, 158)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        display: 'block'
    },
    iconAdress: {
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        fill: 'currentcolor',
        flexShrink: '0',
        transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        marginRight: '6px',
        fontSize: '16px',
        verticalAlign: 'text-top'
    },
    namePerson: {
        margin: '0px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '500',
        fontSize: '0.875rem',
        lineHeight: '1.334',
        color: 'rgb(33, 33, 33)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        display: 'block'
    },
    btnEdit: {
        color: '#90caf9',
        cursor: 'pointer'
    },
    avatarAdress: {
        display: 'flex'
    },
    headerFollower: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    btnFollow: {
        width: '100%',
        marginTop: '16px'
    },
    followers: {
        border: ' 1px solid',
        padding: '16px',
        background: '#fafafa',
        borderColor: '#f5f5f5',
        borderRadius: '10px',
        marginTop: '30px',
        marginLeft: '24px',

        '&:hover': {
            border: '1px solid#2196f3'
        }
    },
    nameAndAdress: {
        paddingLeft: '16px'
    },
    iconUserFollow: {
        marginRight: '7px'
    }
}));

export default function FollowerPerson() {
    const classes = useStyles();

    const arrFollowes = useSelector((state) => state.followerState.arrFollowers);
    console.log(arrFollowes);

    // menu material-ui
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Grid container>
                {arrFollowes
                    ? arrFollowes.map((follower) => (
                          <Grid item xs={12} sm={6} md={4} lg={3} spacing={3}>
                              <div className={classes.followers}>
                                  <div className={classes.headerFollower}>
                                      <div className={classes.avatarAdress}>
                                          <Avatar alt="avatar" src={follower.avatar} />
                                          <div className={classes.nameAndAdress}>
                                              <div className={classes.namePerson}>{follower.name}</div>
                                              <div className={classes.adress}>
                                                  <h6 className={classes.adressDetail}>
                                                      <PinDropTwoToneIcon className={classes.iconAdress} />
                                                      {follower.adress}
                                                  </h6>
                                              </div>
                                          </div>
                                      </div>
                                      <div>
                                          <MoreHorizTwoToneIcon
                                              className={classes.btnEdit}
                                              aria-controls="simple-menu"
                                              aria-haspopup="true"
                                              onClick={handleClick}
                                          >
                                              Open Menu
                                          </MoreHorizTwoToneIcon>
                                          <Menu
                                              id="simple-menu"
                                              anchorEl={anchorEl}
                                              keepMounted
                                              open={Boolean(anchorEl)}
                                              onClose={handleClose}
                                          >
                                              <MenuItem onClick={handleClose}>Profile</MenuItem>
                                              <MenuItem onClick={handleClose}>My account</MenuItem>
                                              <MenuItem onClick={handleClose}>Logout</MenuItem>
                                          </Menu>
                                      </div>
                                  </div>
                                  <div>
                                      <Button className={classes.btnFollow} variant="outlined" color="primary">
                                          <PeopleAltTwoToneIcon className={classes.iconUserFollow} /> Followed
                                      </Button>
                                  </div>
                              </div>
                          </Grid>
                      ))
                    : ''}
            </Grid>
        </>
    );
}
