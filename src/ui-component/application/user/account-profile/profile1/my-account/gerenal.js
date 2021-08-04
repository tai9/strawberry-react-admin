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
    },
    desc: {
        padding: '5px',
        fontSize: '11px',
        color: 'rgb(158, 158, 158)'
    }
}));

export default function GerenalSetting() {
    const classes = useStyles();

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
                            <InputLabel htmlFor="outlined-age-native-simple">Language</InputLabel>
                            <Select native label="Language">
                                <option value={10}>Malysia</option>
                                <option value={20}>India</option>
                                <option value={30}>New York</option>
                            </Select>
                        </FormControl>{' '}
                    </Grid>
                    <Grid className={classes.inputItem} xs={12} md={6}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Signin Using</InputLabel>
                            <Select native label="Signin Using">
                                <option value={10}>Startup</option>
                                <option value={20}>2 years</option>
                                <option value={20}>3 years</option>
                                <option value={20}>4 years</option>
                                <option value={20}>5 years</option>
                                <option value={20}>6 years</option>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
