import React from 'react';
import HeaderInfo from './HeaderInfo';
// material-ui
import { makeStyles } from '@material-ui/styles';
import ContentPost from './ContentPost';
import FormBtnLikeCmt from './FormBtnLikeCmt';


// style constant
const useStyles = makeStyles((theme) => ({
    post: {
        paddingTop: '24px'
    },
    postContent: {
        background: 'white',
        padding: '24px',
        borderRadius: '12px'
    },
    iconLike: {
        fontSize: "18px",
        marginRight: "8px",
    },
    iconCmt: {
        fontSize: "18px",
        marginRight: "8px",
        color: "#673ab7",
    },
    likecmt: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: "8px",
        marginTop: "20px",
        cursor: "pointer"
    }
}));

const Post = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.post}>
                <div className={classes.postContent}>
                    <HeaderInfo />
                    <ContentPost />
                    <FormBtnLikeCmt/>
                    

                </div>
            </div>
        </React.Fragment>
    );
};

export default Post;
