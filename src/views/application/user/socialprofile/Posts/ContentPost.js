/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';

// style constant
const useStyles = makeStyles((theme) => ({
    content: {
        fontSize: '0.875rem',
        fontFamily: " 'Roboto', sans-serif",
        fontWeight: '400',
        lineHeight: '1.334em',
        marginBottom: '0'
    },
    imagepost: {
        width: '100%',
        marginTop: '15px'
    }
}));

const ContentPost = (post) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div>
                <p className={classes.content}>{post.contentPost}</p>
                {post.imagePost.length > 0 ? <img alt="image-post" src={post.imagePost} className={classes.imagepost} /> : ''}
            </div>
        </React.Fragment>
    );
};

export default ContentPost;
