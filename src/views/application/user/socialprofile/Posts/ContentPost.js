import React from 'react'


// material-ui
import { makeStyles } from '@material-ui/styles';

// style constant
const useStyles = makeStyles((theme) => ({
    content: {
        fontSize: "0.875rem",
    fontFamily:" 'Roboto', sans-serif",
    fontWeight: "400",
    lineHeight: "1.334em",
    marginBottom: "0",
    }
}))

const ContentPost = () => {
    const classes = useStyles();


    return (
        <React.Fragment>
            <div>
                <p className={classes.content}>Laboris non ad et aute sint aliquip mollit voluptate velit dolore magna fugiat ex.</p>
                <p className={classes.content}>Commodo amet veniam nostrud mollit quis sint qui nulla elit esse excepteur ullamco esse magna. Nisi duis aute est in mollit irure enim tempor in.</p>
            </div>
        </React.Fragment>
    )
}

export default ContentPost
