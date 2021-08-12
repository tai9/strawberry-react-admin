import React from 'react';

//material-ui
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(97, 97, 97)',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgb(227, 242, 253)',
        margin: '10px'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        padding: '20px'
    },
    title: {
        fontSize: '0.875rem',
        color: 'rgb(33, 33, 33)',
        fontWeight: '500',
        fontFamily: ' Roboto, sans-serif',
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
    setup: { padding: '0 20px 20px' },
    btnSubmit: { display: 'flex', justifyContent: 'flex-end', marginTop: '10px', padding: '20px 10px' },
    clear: { marginLeft: '5px' }
}));
export default function Setting() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
        checkedD: true,
        checkedE: true,
        checkedF: true,
        checkedG: true,
        checkedH: true
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <div className={classes.header}>
                <div className={classes.title}>Email Setting</div>
            </div>
            <hr className={classes.tagHr} />
            <div className={classes.header}>
                <div className={classes.title}>Setup Email Notification</div>
            </div>
            <div className={classes.setup}>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                        label="Email Notification"
                    />
                    <FormControlLabel control={<Switch />} label="Send Copy To Personal Email" />
                </FormGroup>
            </div>
            <hr className={classes.tagHr} />
            <div className={classes.header}>
                <div className={classes.title}>ACTIVITY RELATED EMAILS</div>
            </div>
            <div className={classes.header}>
                <div className={classes.title}>When to email?</div>
            </div>
            <div className={classes.setup}>
                <FormGroup>
                    {' '}
                    <FormControlLabel control={<Switch />} label="have new notifications" />
                    <FormControlLabel
                        control={<Switch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                        label="You're sent a direct message"
                    />{' '}
                    <FormControlLabel
                        control={<Switch checked={state.checkedC} onChange={handleChange} name="checkedC" />}
                        label="Someone adds you as a connection"
                    />
                </FormGroup>
            </div>
            <div className={classes.header}>
                <div className={classes.title}>When to escalate emails?</div>
            </div>
            <div className={classes.setup}>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={state.checkedD} onChange={handleChange} name="checkedD" />}
                        label="Upon new order"
                    />
                    <FormControlLabel
                        control={<Switch checked={state.checkedE} onChange={handleChange} name="checkedE" />}
                        label="New membership approval"
                    />
                    <FormControlLabel control={<Switch />} label="Member registration" />
                </FormGroup>
            </div>
            <hr className={classes.tagHr} />
            <div className={classes.header}>
                <div className={classes.title}>UPDATES FROM SYSTEM NOTIFICATION</div>
            </div>
            <div className={classes.header}>
                <div className={classes.title}>Email you with?</div>
            </div>
            <div className={classes.setup}>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked name="checkA" />}
                        label="News about PCT-themes products and feature updates"
                    />
                    <FormControlLabel control={<Checkbox checked name="checkB" />} label="Tips on getting more out of PCT-themes" />
                    <FormControlLabel
                        control={<Checkbox name="checkE" />}
                        label="Things you missed since you last logged into PCT-themes"
                    />{' '}
                    <FormControlLabel control={<Checkbox name="checkC" />} label="News about products and other services" />
                    <FormControlLabel control={<Checkbox name="checkD" />} label="Tips and Document business products" />
                </FormGroup>
            </div>
            <hr className={classes.tagHr} />

            <div className={classes.btnSubmit}>
                <div className={classes.update}>
                    <Button variant="contained" color="primary">
                        Update
                    </Button>
                </div>{' '}
                <div className={classes.clear}>
                    <Button color="primary">Clear</Button>
                </div>
            </div>
        </Paper>
    );
}
