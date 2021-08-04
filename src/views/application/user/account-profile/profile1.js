import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import LibraryBooksTwoToneIcon from '@material-ui/icons/LibraryBooksTwoTone';
import HttpsTwoToneIcon from '@material-ui/icons/HttpsTwoTone';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import Profile from '../../../../ui-component/application/user/account-profile/profile1/profile/index';
import PresonalDetails from '../../../../ui-component/application/user/account-profile/profile1/presonal';
import MyAccount from '../../../../ui-component/application/user/account-profile/profile1/my-account';
import ChangePass from '../../../../ui-component/application/user/account-profile/profile1/change-pass';
import Setting from '../../../../ui-component/application/user/account-profile/profile1/setting/index';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
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
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        overflow: 'hidden'
    },
    tabs: {
        padding: '20px 20px 0 20px'
    },
    tab: {
        color: '#616161',
        padding: '8px',

        '& > span': {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center'
        },
        '& > span > svg': {
            marginRight: 10,
            marginBottom: '4px !important'
        }
    },
    boxshadow: {
        boxShadow: 'none !important ',
        backgroundColor: '#fff',
        borderBottom: '1px solid #dbdbdb'
    },
    fontSizeTabs: {
        fontSize: '14px'
    },
    tabPanel: {
        padding: '0px'
    }
}));

export default function Profile1() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <AppBar position="static" className={classes.boxshadow} color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                    className={classes.tabs}
                >
                    <Tab
                        className={classes.tab}
                        icon={
                            <span className={classes.fontSizeTabs}>
                                <AccountCircleTwoToneIcon fontSize="small" />
                                PROFILE
                            </span>
                        }
                        wrapped
                        {...a11yProps(0)}
                    />{' '}
                    <Tab
                        className={classes.tab}
                        icon={
                            <span className={classes.fontSizeTabs}>
                                <DescriptionTwoToneIcon fontSize="small" />
                                PRESONAL DETAILS
                            </span>
                        }
                        wrapped
                        {...a11yProps(0)}
                    />
                    <Tab
                        className={classes.tab}
                        icon={
                            <span className={classes.fontSizeTabs}>
                                <LibraryBooksTwoToneIcon fontSize="small" /> MY ACCOUNT
                            </span>
                        }
                        wrapped
                        {...a11yProps(0)}
                    />
                    <Tab
                        className={classes.tab}
                        icon={
                            <span className={classes.fontSizeTabs}>
                                <HttpsTwoToneIcon fontSize="small" />
                                CHANGE PASSWORD
                            </span>
                        }
                        wrapped
                        {...a11yProps(0)}
                    />
                    <Tab
                        className={classes.tab}
                        icon={
                            <span className={classes.fontSizeTabs}>
                                <MailTwoToneIcon fontSize="small" />
                                SETTINGS
                            </span>
                        }
                        wrapped
                        {...a11yProps(0)}
                    />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Profile />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <PresonalDetails />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <MyAccount />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <ChangePass />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Setting />
            </TabPanel>
        </Paper>
    );
}
