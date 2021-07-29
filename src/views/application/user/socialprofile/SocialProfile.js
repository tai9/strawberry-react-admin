/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import imageCover from '../../../../assets/images/Application/User/SocialProfile/img-profile-bg.2b15e931.png';
import avatar from '../../../../assets/images/Application/User/SocialProfile/img-user.41a8c066.png';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

// Scrollable Tabs
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

// material-ui ions for tabs
import { IconInbox, IconUsers, IconFriends, IconPhoto, IconUserPlus } from '@tabler/icons';

// style constant
const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(97, 97, 97)',
        borderRadius: '12px',
        paddingTop: '12px',
        paddingRight: '12px',
        paddingLeft: '12px',
    },
    headerTopProfile: {
        // width: "100%"
    },
    imgcover: {
        width: '100%',
        borderRadius: '12px',
        marginBottom: '24px'
    },
    headerBottomProfile: {},
    avatar: {
        margin: '-70px 0 0 auto',
        textAlign: 'right',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    },
    imgavatar: {
        [theme.breakpoints.down('sm')]: {
            width: '80px',
            height: '80px'
        }
    },
    namePosition: {
        // paddingTop: "2px",
        paddingLeft: '24px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px',
            marginBottom: '20px'
        }
    },
    name: {
        margin: '0px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '500',
        fontSize: '0.875rem',
        lineHeight: '1.334',
        color: 'rgb(33, 33, 33)',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    },
    position: {
        margin: '0px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '400',
        fontSize: '0.75rem',
        lineHeight: '1.57',
        color: 'rgb(158, 158, 158)',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    },
    messRequest: {
        textAlign: 'right',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    },
    message: {
        marginRight: '8px'
    },
    // Scrollable Tabs
    root: {
        flexGrow: 1,
        width: '100%',
        border: "none",
        boxShadow: "none !important ",
        marginTop: "20px",
        overflow: "hidden",
    },
    boxshadow: {
        boxShadow: "none !important ",
    },
    br: {
        flexDirection: "row",
        paddingLeft: "30px"
    },
    tagA: {
        textDecoration: "none"
    },
    iconTabs: {
        marginRight: "10px",
        marginBottom: "4px !important",
        width: "15px"
    },
    scrollablekk : {
        justifyContent: "flex-end !important ",
    }
}));

// Scrollable Tabs
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`
    };
}

const SocialProfile = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <div className={classes.header}>
                <div className={classes.headerTopProfile}>
                    <img className={classes.imgcover} src={imageCover}></img>
                </div>
                <div className={classes.headerBottomProfile}>
                    <Grid container>
                        <Grid item xs={12} sm={3}>
                            <div className={classes.avatar}>
                                <img className={classes.imgavatar} src={avatar} />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Grid container>
                                <Grid className={classes.namePosition} item xs={12} sm={4}>
                                    <h5 className={classes.name}>John Doe123</h5>
                                    <h6 className={classes.position}>Android Developer</h6>
                                </Grid>
                                <Grid className={classes.messRequest} item xs={12} sm={8}>
                                    <Button className={classes.message} variant="outlined" color="primary">
                                        Message
                                    </Button>
                                    <Button variant="contained" color="primary">
                                        <PersonAddOutlinedIcon />
                                        Send Request
                                    </Button>
                                </Grid>
                            </Grid>

                            <div className={classes.root}>
                                <AppBar className={classes.boxshadow} position="static" color="">
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        variant="scrollable"
                                        scrollButtons="auto"
                                        aria-label="scrollable auto tabs example"
                                    >
                                        <Tab  className={classes.br} icon={<IconInbox className={classes.iconTabs}/>}  label="PROFILE" {...a11yProps(0)} />
                                        <Tab className={classes.br} icon={<IconUsers className={classes.iconTabs}/>} label="FOLLOWERS" {...a11yProps(1)} />
                                        <Tab className={classes.br} icon={<IconFriends className={classes.iconTabs}/>} label="FRIENDS" {...a11yProps(2)} />
                                        <Tab className={classes.br} icon={<IconPhoto className={classes.iconTabs}/>} label="GALLERY" {...a11yProps(3)} />
                                        <Tab className={classes.br} icon={<IconUserPlus className={classes.iconTabs}/>} label="FRIEND REQUEST" {...a11yProps(4)} />
                                    </Tabs>
                                </AppBar>
                                {/* <TabPanel value={value} index={0}>
                                    Item One
                                </TabPanel> */}
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SocialProfile;
