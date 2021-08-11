import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Profile from '../../../../ui-component/application/user/account-profile/profile3/profile';
import Billing from '../../../../ui-component/application/user/account-profile/profile3/billing';
import Security from '../../../../ui-component/application/user/account-profile/profile3/security';

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
        padding: '20px 0 0 10px'
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
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        padding: '30px 20px'
    },
    title: {
        fontSize: '1.125rem',
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
        borderBottom: '1px solid #efefef'
    }
}));
const Profile3 = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <div className={classes.header}>
                <div className={classes.title}>Account</div>
            </div>
            <hr className={classes.tagHr} />
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
                    <Tab className={classes.tab} icon={<span className={classes.fontSizeTabs}>PROFILE</span>} wrapped {...a11yProps(0)} />{' '}
                    <Tab className={classes.tab} icon={<span className={classes.fontSizeTabs}>BILLING</span>} wrapped {...a11yProps(0)} />
                    <Tab className={classes.tab} icon={<span className={classes.fontSizeTabs}>SECURITY</span>} wrapped {...a11yProps(0)} />
                    <Tab
                        className={classes.tab}
                        icon={<span className={classes.fontSizeTabs}>NOTIFICATIONS</span>}
                        wrapped
                        {...a11yProps(0)}
                    />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Profile />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Billing />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Security />
            </TabPanel>
            <TabPanel value={value} index={3}>
                4{' '}
            </TabPanel>
        </Paper>
    );
};
export default Profile3;
