import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//input adornments
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

// material-ui
import { makeStyles } from '@material-ui/styles';
import GalleryImage from './GalleryImage';

// gird material-ui
import Grid from '@material-ui/core/Grid';

// asset
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';

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

export default function Gallery() {
    const classes = useStyles();

    const arrGallery = useSelector((state) => state.galleryState.arrgallery);

    return (
        <>
            <div className={classes.formFollower}>
                <div className={classes.follower}>
                    <div className={classes.headerFollower}>
                        <h3 className={classes.followerTitle}>Gallery</h3>
                        <div className={classes.divSearch}>
                            <Button variant="contained" color="secondary">
                                Add Photos
                            </Button>
                        </div>
                    </div>
                </div>
                <hr className={classes.tagHr} />
                <div className={classes.formFollowPerson}>
                    <Grid container>{arrGallery ? arrGallery.map((gallery, index) => <GalleryImage key={index} {...gallery} />) : ''}</Grid>
                </div>
            </div>
        </>
    );
}
