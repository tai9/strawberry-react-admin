import React from 'react';

//material-ui
import { makeStyles } from '@material-ui/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DesktopMacTwoToneIcon from '@material-ui/icons/DesktopMacTwoTone';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import SmartphoneTwoToneIcon from '@material-ui/icons/SmartphoneTwoTone';
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone';
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
    switch: {
        padding: '20px'
    },
    switchItem: {
        padding: '10px 0'
    },
    recognized: {
        padding: '20px'
    },
    recognizedItem: { paddingTop: '10px', alignItems: 'center' },
    device: { display: 'flex' },
    icon: {
        padding: '0 2px'
    },
    name: { fontSize: '14px', fontWeight: '500', color: 'black', padding: '0 3px' },
    statusActive: { color: '#00e676', display: 'flex', alignItems: 'center', textAlign: 'right' },
    status: { display: 'flex', alignItems: 'center', textAlign: 'right', color: 'rgb(158, 158, 158)' },
    time: { padding: '5px', fontSize: '11px' },
    activeDevice: { padding: '20px' },
    activeItem: {
        paddingTop: '10px',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconActive: { color: '#00e676' },
    btnSubmit: { display: 'flex', justifyContent: 'flex-end', marginTop: '20px' },
    clear: { marginLeft: '5px' }
}));

export default function AdvanceSetting() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.header}>
                <div className={classes.title}>Advance Settings</div>
            </div>
            <hr className={classes.tagHr} />
            <div className={classes.switch}>
                <div className={classes.switchItem}>
                    <div className={classes.title}>SECURE BROWSING</div>
                    <FormControlLabel control={<Switch />} label="Browsing Securely ( https ) when it's necessary" />
                </div>
                <div className={classes.switchItem}>
                    <div className={classes.title}>LOGIN NOTIFICATIONS</div>
                    <FormControlLabel control={<Switch />} label="Notify when login attempted from other place" />
                </div>
                <div className={classes.switchItem}>
                    <div className={classes.title}>LOGIN APPROVALS</div>
                    <FormControlLabel
                        defaultChecked
                        control={<Switch />}
                        label="Approvals is not required when login from unrecognized devices."
                    />
                </div>{' '}
                <hr className={classes.tagHr} />
            </div>
            <div className={classes.recognized}>
                <div className={classes.title}>RECOGNIZED DEVICES</div>
                <div className={classes.content}>
                    <div className={classes.recognizedItem}>
                        {' '}
                        <Grid container>
                            <Grid className={classes.device} item xs={12} md={8}>
                                <div className={classes.icon}>
                                    <DesktopMacTwoToneIcon fontSize="small" />
                                </div>
                                <span className={classes.name}>Cent Desktop </span> | 4351 Deans Lane, Chelmsford
                            </Grid>
                            <Grid dir="rtl" className={classes.statusActive} item xs={12} md={4}>
                                {' '}
                                <IconButton aria-label="delete" className={classes.margin} size="small">
                                    <HighlightOffTwoToneIcon fontSize="inherit" />
                                </IconButton>{' '}
                                <div className={classes.time}> Current Active</div>
                                <FiberManualRecordIcon fontSize="small" />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.recognizedItem}>
                        {' '}
                        <Grid container>
                            <Grid className={classes.device} item xs={12} md={8}>
                                <div className={classes.icon}>
                                    <SmartphoneTwoToneIcon fontSize="small" />
                                </div>
                                <span className={classes.name}>Imho Tablet </span> | 4185 Michigan Avenue
                            </Grid>
                            <Grid dir="rtl" className={classes.status} item xs={12} md={4}>
                                {' '}
                                <IconButton aria-label="delete" className={classes.margin} size="small">
                                    <HighlightOffTwoToneIcon fontSize="inherit" />
                                </IconButton>{' '}
                                <div className={classes.time}> Active 5 days ago</div>
                                <FiberManualRecordIcon fontSize="small" />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.recognizedItem}>
                        {' '}
                        <Grid container>
                            <Grid className={classes.device} item xs={12} md={8}>
                                <div className={classes.icon}>
                                    <PhoneIphoneTwoToneIcon fontSize="small" />
                                </div>
                                <span className={classes.name}>Albs Mobile </span> | 3462 Fairfax Drive, Montcalm
                            </Grid>
                            <Grid dir="rtl" className={classes.status} item xs={12} md={4}>
                                {' '}
                                <IconButton aria-label="delete" className={classes.margin} size="small">
                                    <HighlightOffTwoToneIcon fontSize="inherit" />
                                </IconButton>{' '}
                                <div className={classes.time}> Active 1 month ago</div>
                                <FiberManualRecordIcon fontSize="small" />
                            </Grid>
                        </Grid>
                    </div>
                </div>{' '}
                <hr className={classes.tagHr} />
            </div>
            <div className={classes.activeDevice}>
                <div className={classes.title}>ACTIVE SESSIONS</div>
                <div className={classes.activeItem}>
                    {' '}
                    <div className={classes.device} item xs={12} md={10}>
                        <div className={classes.iconActive}>
                            <PhoneIphoneTwoToneIcon fontSize="small" />
                        </div>
                        <span className={classes.name}>Albs Mobile </span> | 3462 Fairfax Drive, Montcalm
                    </div>
                    <div dir="rtl" className={classes.btnLogout}>
                        {' '}
                        <Button color="primary">Logout</Button>
                    </div>
                </div>
                <div className={classes.activeItem}>
                    {' '}
                    <div className={classes.device} item xs={12} md={10}>
                        <div className={classes.iconActive}>
                            <SmartphoneTwoToneIcon fontSize="small" />
                        </div>
                        <span className={classes.name}>Moon Tablet </span> | 4185 Michigan Avenue
                    </div>
                    <div dir="rtl" className={classes.btnLogout}>
                        {' '}
                        <Button color="primary">Logout</Button>
                    </div>
                </div>{' '}
                <hr className={classes.tagHr} />
                <div className={classes.btnSubmit}>
                    <div className={classes.update}>
                        <Button variant="contained" color="primary">
                            Update Profile
                        </Button>
                    </div>{' '}
                    <div className={classes.clear}>
                        <Button color="primary">Clear</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
