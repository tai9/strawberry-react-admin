import React from 'react';

//Input Adornments
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

// material-ui
import { makeStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';
import FollowerPerson from './FollowerPerson';

const useStyles = makeStyles((theme) => ({
    follower: {
        marginTop: '24px',
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '12px'
    },
    headerFollower: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    followerTitle: {
        margin: '0px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '600',
        fontSize: '1.25rem',
        lineHeight: '1.167',
        color: 'rgb(33, 33, 33)'
    },
    divSearch: {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '400',
        fontSize: '0.875rem',
        lineHeight: '1em !important',
        color: 'rgb(97, 97, 97)',
        boxSizing: 'border-box',
        cursor: 'text',
        display: 'inline-flex',
        alignItems: 'center',
        position: 'relative',
        borderRadius: '12px'
    },
    inputSearch: {
        padding: ' 10px 14px !important'
    },
    formFollower: {
        backgroundColor: 'white',
        borderRadius: '12px'
    },
    formFollowPerson: {
        paddingRight: '24px',
        paddingBottom: '24px'
    },
    tagHr: {
        opacity: '0.5',
        margin: '0'
    }
}));

export default function Follower() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.formFollower}>
                <div className={classes.follower}>
                    <div className={classes.headerFollower}>
                        <h3 className={classes.followerTitle}>Followers</h3>
                        <div className={classes.divSearch}>
                            <TextField
                                id="outlined-start-adornment"
                                placeholder="Search Followers"
                                className={classes.inputSearch}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    )
                                }}
                                variant="outlined"
                            />
                        </div>
                    </div>
                </div>
                <hr className={classes.tagHr} />
                <div className={classes.formFollowPerson}>
                    <FollowerPerson />
                </div>
            </div>
        </>
    );
}
