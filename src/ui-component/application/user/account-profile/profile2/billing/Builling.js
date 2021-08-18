import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
    textInfo: {
        width: '100%'
    },
    checkBox: {
        marginTop: '24px'
    }
}));

const Builling = () => {
    const classes = useStyles();

    const [location, setLocation] = React.useState(1);
    const handleChangeLocation = (event) => {
        setLocation(event.target.value);
    };

    // checkbox with formControllabel material-ui
    const [state, setState] = React.useState({
        checked: true
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <>
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.textInfo}
                            id="outlined-basic"
                            defaultValue="16657"
                            label="Block No#"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.textInfo}
                            id="outlined-basic"
                            defaultValue="Dardan Ranch"
                            label="Apartment Name"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.textInfo}
                            id="outlined-basic"
                            defaultValue="Nathaniel Ports"
                            label="Street Line 1"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            className={classes.textInfo}
                            id="outlined-basic"
                            defaultValue="nr. Oran Walks"
                            label="Street Line 2"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            className={classes.textInfo}
                            id="outlined-basic"
                            defaultValue="395005"
                            label="Postcode"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl variant="outlined" className={classes.textInfo}>
                            <InputLabel id="demo-simple-select-outlined-label">Location</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={location}
                                onChange={handleChangeLocation}
                                label="Select City"
                            >
                                <MenuItem value={1}>Los Angeles</MenuItem>
                                <MenuItem value={2}>Chicago</MenuItem>
                                <MenuItem value={3}>Phoenix</MenuItem>
                                <MenuItem value={4}>San Antonio</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl variant="outlined" className={classes.textInfo}>
                            <InputLabel id="demo-simple-select-outlined-label">Location</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={location}
                                onChange={handleChangeLocation}
                                label="Select Country"
                            >
                                <MenuItem value={1}>India</MenuItem>
                                <MenuItem value={2}>France</MenuItem>
                                <MenuItem value={3}>USA</MenuItem>
                                <MenuItem value={4}>UAE Antonio</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <FormControlLabel
                    className={classes.checkBox}
                    control={<Checkbox checked={state.checked} onChange={handleChange} name="checked" color="primary" />}
                    label="Same as billing address"
                />
            </div>
        </>
    );
};

export default Builling;
