import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

// asset
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import PaymentTwoToneIcon from '@material-ui/icons/PaymentTwoTone';
import VpnKeyTwoToneIcon from '@material-ui/icons/VpnKeyTwoTone';

// vertical tabs
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UserProfile from '../../../../ui-component/application/user/account-profile/profile2/user-profile/UserProfile';
import { Button } from '@material-ui/core';
import Builling from '../../../../ui-component/application/user/account-profile/profile2/billing/Builling';
import PayMent from '../../../../ui-component/application/user/account-profile/profile2/payment/PayMent';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`
    };
}

const useStyles = makeStyles((theme) => ({
    accountSetting: {
        fontSize: '1.125rem',
        margin: '0px',
        color: 'rgb(33, 33, 33)',
        fontWeight: '500',
        fontFamily: 'Roboto, sans-serif',
        lineHeight: '1.334',
        display: 'block'
    },
    borderAccountSetting: {
        padding: '24px',
        background: 'white',
        borderRadius: '12px'
    },
    profile2: {
        background: 'white',
        borderRadius: '12px'
    },
    tagHr: {
        margin: '0px',
        flexShrink: '0',
        borderWidth: '0px 0px thin',
        borderStyle: 'solid',
        borderColor: 'rgb(238, 238, 238)',
        opacity: '1'
    },
    activeTabs: {
        color: '#212121',
        display: 'flex',
        padding: '12px 16px',
        minWidth: '100%',
        minHeight: 'auto',
        textAlign: 'left',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: ' flex-start',
        borderRadius: '12px'
    },
    nameTag: {
        margin: '0px',
        fontSize: '0.875rem',
        fontWeight: 500,
        fontFamily: 'Roboto, sans-serif',
        lineHeight: '1.75',
        color: 'inherit'
    },
    detailNameTag: {
        margin: '0px',
        fontSize: ' 0.75rem',
        color: 'rgb(158, 158, 158)',
        fontWeight: '400',
        fontFamily: 'Roboto, sans-serif',
        lineHeight: '1.66',
        textTransform: 'capitalize'
    },
    tabName: {
        display: 'flex',
        textAlign: 'left'
    },
    iconTab: {
        width: '20px',
        height: '20px',
        marginTop: '10px',
        marginRight: '10px',
        marginBottom: '0px !important'
    },
    tabTitle: {
        padding: '24px',
        width: '100%',
        [theme.breakpoints.down('960px')]: {
            borderRight: 'none'
        }
    },
    contentTab: {
        width: '100%'
    },
    borderLeft: {
        borderLeft: `1px solid ${theme.palette.divider}`
    },
    formBtnNextAndPre: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 auto',
        padding: '20px'
    }
}));

export default function Profile2() {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const nextTab = () => {
        if (value < 3) {
            setValue(value + 1);
        }
    };
    const preTab = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    return (
        <>
            <div className={classes.profile2}>
                <div className={classes.borderAccountSetting}>
                    <span className={classes.accountSetting}>Account Settings</span>
                </div>
                <hr className={classes.tagHr} />
                <div>
                    <div>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12} lg={4}>
                                <div className={classes.tabTitle}>
                                    <Tabs
                                        orientation="vertical"
                                        variant="scrollable"
                                        value={value}
                                        onChange={handleChange}
                                        aria-label="Vertical tabs example"
                                        className={classes.tabs}
                                    >
                                        <Tab
                                            className={classes.activeTabs}
                                            label={
                                                <div className={classes.tabName}>
                                                    <div>
                                                        <PersonOutlineTwoToneIcon className={classes.iconTab} />
                                                    </div>
                                                    <div>
                                                        <h6 className={classes.nameTag}>User Profile</h6>
                                                        <div className={classes.detailNameTag}>Profile Settings</div>
                                                    </div>
                                                </div>
                                            }
                                            {...a11yProps(0)}
                                        />
                                        <Tab
                                            className={classes.activeTabs}
                                            label={
                                                <div className={classes.tabName}>
                                                    <div>
                                                        <DescriptionTwoToneIcon className={classes.iconTab} />
                                                    </div>
                                                    <div>
                                                        <h6 className={classes.nameTag}>BILLING</h6>
                                                        <div className={classes.detailNameTag}>Billing Information</div>
                                                    </div>
                                                </div>
                                            }
                                            {...a11yProps(1)}
                                        />
                                        <Tab
                                            className={classes.activeTabs}
                                            label={
                                                <div className={classes.tabName}>
                                                    <div>
                                                        <PaymentTwoToneIcon className={classes.iconTab} />
                                                    </div>
                                                    <div>
                                                        <h6 className={classes.nameTag}>PAYMENT</h6>
                                                        <div className={classes.detailNameTag}>Add & Update Card</div>
                                                    </div>
                                                </div>
                                            }
                                            {...a11yProps(2)}
                                        />
                                        <Tab
                                            className={classes.activeTabs}
                                            label={
                                                <div className={classes.tabName}>
                                                    <div>
                                                        <VpnKeyTwoToneIcon className={classes.iconTab} />
                                                    </div>
                                                    <div>
                                                        <h6 className={classes.nameTag}>Change Password</h6>
                                                        <div className={classes.detailNameTag}>Update Profile Security</div>
                                                    </div>
                                                </div>
                                            }
                                            {...a11yProps(3)}
                                        />
                                    </Tabs>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={12} lg={8}>
                                <TabPanel className={classes.borderLeft} value={value} index={0}>
                                    <UserProfile className={classes.contentTab} />
                                </TabPanel>
                                <TabPanel className={classes.borderLeft} value={value} index={1}>
                                    <Builling />
                                </TabPanel>
                                <TabPanel className={classes.borderLeft} value={value} index={2}>
                                    <PayMent />
                                </TabPanel>
                                <TabPanel className={classes.borderLeft} value={value} index={3}>
                                    Item Four
                                </TabPanel>
                            </Grid>
                        </Grid>
                        <hr className={classes.tagHr} />
                    </div>
                </div>
                <div className={classes.formBtnNextAndPre}>
                    <div className={classes.btnPre}>
                        {value !== 0 ? (
                            <Button onClick={preTab} variant="outlined">
                                Back
                            </Button>
                        ) : (
                            ''
                        )}
                    </div>
                    <div className={classes.btnNext}>
                        {value !== 3 ? (
                            <Button onClick={nextTab} variant="contained">
                                Continue
                            </Button>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
