import React from 'react'
import { Grid } from '@material-ui/core';

// material-ui
import { makeStyles } from '@material-ui/styles';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import RecentActorsIcon from '@material-ui/icons/RecentActors';


// style constant
const useStyles = makeStyles((theme) => ({
    friendAndFollow: {
        padding: '24px',
        backgroundColor: 'white',
        marginTop: '24px',
        borderRadius: '12px'
    },
    friAndFolContent: {
        width: '100%',
        // backgroundColor: 'yellow'
    },
    avataFriend: {
        display: 'flex'
    },
    borderAvataAndFriend: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    friends: {
        color: '#1e88e5',
        width: '48px',
        height: '48px',
        backgroundColor: '#e3f2fd',

        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',

        marginRight: "24px"
    },
    followers: {
        color: '#5e35b1',
        width: '48px',
        height: '48px',
        backgroundColor: '#ede7f6',

        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',

        marginRight: "24px"
    },
    iconAvatar: {},
    totalFriend: {
        margin: '0px 0px 5px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '600',
        fontSize: '1.25rem',
        lineHeight: '1.167',
        color: 'rgb(33, 150, 243)'
    },
    totalFollowers: {
        margin: '0px 0px 5px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '600',
        fontSize: '1.25rem',
        lineHeight: '1.167',
        color: "#673ab7"
    },
    friend: {
        margin: "0px",
        fontFamily: "Roboto, sans-serif",
        fontWeight: "400",
        fontSize: "0.875rem",
        lineHeight: "1.5em",
        letterSpacing: "0em",
        color: "rgb(97, 97, 97)",
    },
    nextIcon: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

const FriendAndFollow = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.friendAndFollow}>
                        <div className={classes.friAndFolContent}>
                            <div>
                                <div className={classes.borderAvataAndFriend}>
                                    <div className={classes.avataFriend}>
                                        <div>
                                            <div className={classes.friends}>
                                                <PeopleAltOutlinedIcon className={classes.iconFriend} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className={classes.totalFriend}>239k</div>
                                            <p className={classes.friend}>Friends</p>
                                        </div>
                                    </div>
                                    <div className={classes.nextIcon}>
                                        <NavigateNextOutlinedIcon />
                                    </div>
                                </div>
                                <hr style={{ marginTop: '16px', marginBottom: '16px', borderWidth: "0px 0px thin"}}></hr>
                                <div className={classes.borderAvataAndFriend}>
                                    <div className={classes.avataFriend}>
                                        <div>
                                            <div className={classes.followers}>
                                                <RecentActorsIcon className={classes.iconAvatar} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className={classes.totalFollowers}>234k</div>
                                            <p className={classes.friend}>Followers</p>
                                        </div>
                                    </div>
                                    <div className={classes.nextIcon}>
                                        <NavigateNextOutlinedIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
        </React.Fragment>
    )
}

export default FriendAndFollow
