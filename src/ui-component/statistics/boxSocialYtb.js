import React from 'react';
import { makeStyles } from '@material-ui/styles';
import YouTubeIcon from '@material-ui/icons/YouTube';
const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        width: ' 100%',
        webkitBoxPack: 'justify',
        justifyContent: 'space-between',
        webkitBoxAlign: 'center',
        alignItems: 'center'
    },
    content: {
        display: 'inline-block'
    },
    data: {
        fontSize: 21,
        fontWeight: 500,
        margin: '8px 0'
    },
    title: {
        fontSize: 14,
        fontWeight: 400
    }
}));
export default function BoxSocialFb() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <div className={classes.data}>650 +</div>
                <div className={classes.title}>Youtube Videos</div>
            </div>
            <div>
                <YouTubeIcon style={{ fontSize: 40, opacity: 0.4 }} />
            </div>
        </div>
    );
}
