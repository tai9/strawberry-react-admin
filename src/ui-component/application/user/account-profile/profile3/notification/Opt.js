import React from 'react';

//material ui
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        padding: '20px'
    },
    title: {
        fontSize: '15px',
        fontWeight: '500',
        color: 'black',
        flex: '1 1 auto'
    },
    tagHr: {
        margin: '0px',
        flexShrink: 0,
        borderWidth: '0px 0px thin',
        borderStyle: 'solid',
        opacity: 1,
        borderColor: ' rgb(227, 242, 253)'
    },

    content: {
        padding: '20px'
    },
    btn: {
        padding: '3px 9px',
        margin: '20px 0'
    }
}));

const Opt = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: false
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <div>
            <div className={classes.header}>
                <div className={classes.title}>Opt me out instead</div>
            </div>
            <hr className={classes.tagHr} />
            <div className={classes.content}>
                <FormControlLabel
                    control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                    label="Unsubscribe me from all of the above"
                />
                <Button className={classes.btn} variant="contained">
                    Update my preferences
                </Button>
            </div>
        </div>
    );
};
export default Opt;
