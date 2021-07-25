import React from 'react';
import ChatBubbleTwoToneIcon from '@material-ui/icons/ChatBubbleTwoTone';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

import avatar from '../../../../../assets/images/Application/User/SocialProfile/img-user.41a8c066.png';
import { Avatar } from '@material-ui/core';

// Collapse
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
    iconLike: {
        fontSize: '18px',
        marginRight: '8px',
    },
    iconCmt: {
        fontSize: '18px',
        marginRight: '8px',
        color: '#673ab7',
    },
    likecmt: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '8px',
        marginTop: '20px',
        cursor: 'pointer',
        fontWeight: '700',
        fontSize: '12px',
    },
    borderLikeCmt: {
        display: 'flex',
        marginTop: '18px',
        marginBottom: '13px'
    },
    textField: {
        width: '100%'
    },
    borderTextField: {
        width: '100%',
        paddingTop: '16px',
        paddingLeft: '16px'
    },
    borderLikeCmtHindden: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    avatar: {
        width: '34px',
        height: '34px'
    },
    borderAvatar: {
        paddingTop: '16px'
    },
    btnComment: {
        paddingTop: '16px',
        paddingLeft: '16px'
    },
    //Collapse
    root: {
        width: '100%'
    },
    container: {
        // display: 'flex'
    },
    onClickIconLike: {
        color: "rgb(33, 150, 243)",
        fontSize: '18px',
        marginRight: '8px',
    }
}));

const FormBtnLikeCmt = () => {
    const classes = useStyles();

    const [checked, setChecked] = React.useState(true);

    const [like, setLike] = React.useState(false);
    const [score, setScore] = React.useState(10);

    const handleClick = () => {
        setChecked((prev) => !prev);
    };

    const handleClickToLike = async () => {
        await setLike((prev) => !prev);
        if(like){
            setScore(score - 1)
        }
        else{
            setScore(score + 1)
        }
    };


    return (
        <div>
            {/* like and comment */}
            <div className={classes.borderLikeCmt}>
                <div className={classes.likecmt} onClick={handleClickToLike}>
                    {like ? <><ThumbUpAltTwoToneIcon className={classes.onClickIconLike} /> {score} Likes</>:
                    <>
                        <ThumbUpAltTwoToneIcon className={classes.iconLike} /> {score} Likes
                    </>
                    }
                </div>
                <div className={classes.likecmt} onClick={handleClick}>
                    <ChatBubbleTwoToneIcon className={classes.iconCmt} /> 10 Comments
                </div>
            </div>

            <div className={classes.root}>
                {/* <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" /> */}
                <div className={classes.container}>
                    <Collapse in={checked}>
                        <div>
                            <div className={classes.borderLikeCmtHindden}>
                                <div className={classes.borderAvatar}>
                                    <Avatar className={classes.avatar} src={avatar} alt="avatar" />
                                </div>

                                <div className={classes.borderTextField}>
                                    <TextField
                                        className={classes.textField}
                                        id="outlined-basic"
                                        label="Write a comment..."
                                        variant="outlined"
                                    />
                                </div>
                                <div className={classes.btnComment}>
                                    <Button variant="contained" color="secondary">
                                        Comment
                                    </Button>
                                </div>
                            </div>
                            </div>
                    </Collapse>
                </div>
            </div>
        </div>
    );
};

export default FormBtnLikeCmt;
