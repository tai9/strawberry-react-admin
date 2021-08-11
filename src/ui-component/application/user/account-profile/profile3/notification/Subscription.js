import React from 'react';

//material ui
import { makeStyles } from '@material-ui/styles';
import FormGroup from '@material-ui/core/FormGroup';
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
    ques: { fontSize: '15px', fontWeight: '500', color: 'black', margin: '10px 0 20px 0' },
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
        border: '1px solid rgba(244, 67, 54, 0.5)',
        color: 'rgb(244, 67, 54)',
        padding: '3px 9px',
        margin: '20px 0',
        '&:hover': {
            background: 'rgba(244, 67, 54, 0.1)',
            border: '1px solid rgba(244, 67, 54, 0.5)'
        }
    }
}));

const Subscription = () => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
        checkedD: false
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <div className={classes.header}>
                <div className={classes.title}>Subscription Preference Center</div>
            </div>
            <hr className={classes.tagHr} />
            <div className={classes.content}>
                <div className={classes.ques}>I would like to receive:</div>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                        label="Product Announcements and Updates"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                        label="Events and Meetups"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" />}
                        label="User Research Surveys"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedD} onChange={handleChange} name="checkedD" />}
                        label="Hatch Startup Program"
                    />
                </FormGroup>
            </div>
        </div>
    );
};
export default Subscription;
