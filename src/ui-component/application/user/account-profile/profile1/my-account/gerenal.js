import React from 'react';

//material-ui
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
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
    inputValue: {
        padding: '20px'
    },
    inputItem: {
        display: 'inline-flex',
        flexDirection: 'column',
        position: 'relative',
        padding: '10px',
        verticalAlign: 'top',
        width: '100%'
    },
    desc: {
        padding: '5px',
        fontSize: '11px',
        color: 'rgb(158, 158, 158)'
    }
}));

export default function GerenalSetting() {
    const classes = useStyles();
    const [location, setLocation] = React.useState(1);
    const [experience, setExperience] = React.useState(5);

    const handleChangeExperience = (event) => {
        setExperience(event.target.value);
    };

    const handleChangeLocation = (event) => {
        setLocation(event.target.value);
    };
    return (
        <div>
            <div className={classes.header}>
                <div className={classes.title}>General Settings</div>
            </div>
            <hr className={classes.tagHr} />
            <div className={classes.inputValue}>
                <Grid container>
                    <Grid className={classes.inputItem} xs={12} md={6}>
                        <TextField required id="outlined-required" label="Username" defaultValue="Asoka_Tana_16" variant="outlined" />
                        <div className={classes.desc}>Your Profile URL: https://pc.com/Ashoka_Tano_16</div>
                    </Grid>
                    <Grid className={classes.inputItem} xs={12} md={6}>
                        <TextField required id="outlined-required" label="AccountEmail" defaultValue="demo@sample.com" variant="outlined" />
                    </Grid>
                    <Grid className={classes.inputItem} xs={12} md={6}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Location</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={location}
                                onChange={handleChangeLocation}
                                label="Location"
                            >
                                <MenuItem value={1}>Washington</MenuItem>
                                <MenuItem value={2}>India</MenuItem>
                                <MenuItem value={3}>Malaysia</MenuItem>
                                <MenuItem value={4}>New York</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid className={classes.inputItem} xs={12} md={6}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Location</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={experience}
                                onChange={handleChangeExperience}
                                label="Location"
                            >
                                <MenuItem value={5}>Startup</MenuItem>
                                <MenuItem value={6}>2 years</MenuItem>
                                <MenuItem value={7}>2 years</MenuItem>
                                <MenuItem value={8}>2 years</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
