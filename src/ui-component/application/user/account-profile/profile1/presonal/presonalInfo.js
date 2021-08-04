import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

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
    }
}));

export default function PresonalInfo() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.header}>
                <div className={classes.title}>Personal Information</div>
            </div>
            <hr className={classes.tagHr} />
            <div className={classes.inputValue}>
                <Grid container>
                    <Grid className={classes.inputItem} xs={12} md={6}>
                        <TextField required id="outlined-required" label="Name" defaultValue="Asoka Tana" variant="outlined" />
                    </Grid>
                    <Grid className={classes.inputItem} xs={12} md={6}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Location</InputLabel>
                            <Select native label="Location">
                                <option value={10}>Malysia</option>
                                <option value={20}>India</option>
                                <option value={30}>New York</option>
                            </Select>
                        </FormControl>{' '}
                    </Grid>
                    <Grid className={classes.inputItem} xs={12}>
                        {' '}
                        <TextField
                            id="outlined-multiline-static"
                            label="Bio"
                            multiline
                            rows={3}
                            defaultValue="I consider myself as a creative, professional and a flexible person. I can adapt with any kind of brief and design style"
                            variant="outlined"
                        />{' '}
                    </Grid>
                    <Grid className={classes.inputItem} xs={12} md={6}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Experience</InputLabel>
                            <Select native label="Experience">
                                <option value={10}>Startup</option>
                                <option value={20}>2 years</option>
                                <option value={20}>3 years</option>
                                <option value={20}>4 years</option>
                                <option value={20}>5 years</option>
                                <option value={20}>6 years</option>
                            </Select>
                        </FormControl>{' '}
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
