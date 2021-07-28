import React from 'react';

// material-ui
import { makeStyles, useTheme } from '@material-ui/styles';
import { Grid, Paper, Avatar } from '@material-ui/core';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SearchIcon from '@material-ui/icons/Search';
import MuiTypography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ChatBubbleTwoToneIcon from '@material-ui/icons/ChatBubbleTwoTone';
import CallTwoToneIcon from '@material-ui/icons/CallTwoTone';
import PublishTwoToneIcon from '@material-ui/icons/PublishTwoTone';
import IconButton from '@material-ui/core/IconButton';
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';
import TextField from '@material-ui/core/TextField';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import SubCard from './../../../ui-component/cards/SubCard';
import MainCard from './../../../ui-component/cards/MainCard';
import SecondaryAction from './../../../ui-component/cards/CardSecondaryAction';
import { gridSpacing } from './../../../store/constant';
import man1 from './../../../assets/images/avatars/man1.png';
import MenuCustom from './Menu';

import InputCustom from './InputCustom';

// assets
import { IconLogout, IconSearch, IconSettings, IconUser } from '@tabler/icons';
import BusinessTwoToneIcon from '@material-ui/icons/BusinessTwoTone';
//==============================|| CONTACT CARD ||==============================//

// style constant
const useStyles = makeStyles((theme) => ({
    divider: {
        marginTop: '12px',
        marginBottom: '12px'
    },
    paper: {
        border: '1px solid',
        padding: 16,
        background: '#fafafa',
        borderColor: '#f5f5f5'
    },
    img: {
        width: 72,
        height: 72
    },
    ScrollHeight: {
        height: 'calc(100vh - 88px)',
        [theme.breakpoints.down('sm')]: {
            height: 'calc(100vh - 56px)'
        }
    },
    info: {
        width: '100%',
        maxWidth: 342
    },
    avtLarge: {
        width: theme.spacing(8),
        height: theme.spacing(8)
    },
    startAdornment: {
        color: theme.palette.grey[500]
    },
    margin: {
        margin: theme.spacing(1)
    }
}));

const Card = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <MainCard title="Contact Cards">
            <Grid container spacing={gridSpacing}>
                <Grid item xs>
                    <Grid container spacing={gridSpacing} alignItems="baseline">
                        <Grid item xs>
                            <OutlinedInput
                                className={classes.searchControl}
                                id="input-search-contact"
                                placeholder="Search Contact"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <IconSearch stroke={1.5} size="1.3rem" className={classes.startAdornment} />
                                    </InputAdornment>
                                }
                                aria-describedby="search-helper-text"
                                inputProps={{
                                    'aria-label': 'weight'
                                }}
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" size="large" startIcon={<AddCircleOutlineIcon />}>
                                Add
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider
                                sx={{
                                    margin: '5px 0px 15px',
                                    opacity: 1,
                                    borderColor: theme.palette.primary.light
                                }}
                            />
                            <MuiTypography
                                sx={{
                                    color: theme.palette.primary.main
                                }}
                                variant="h4"
                            >
                                A
                            </MuiTypography>
                            <Divider
                                sx={{
                                    margin: '15px 0px 5px',
                                    opacity: 1,
                                    borderColor: theme.palette.primary.light
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Paper className={classes.paper} elevation={0}>
                                <Grid container xs={12} rowSpacing={gridSpacing}>
                                    <Grid item xs={12}>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs style={{ cursor: 'pointer' }}>
                                                <Avatar className={classes.img} alt="Remy Sharp" src={man1} />
                                            </Grid>
                                            <Grid item>
                                                <MenuCustom />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <MuiTypography variant="h3">Alene</MuiTypography>
                                        <MuiTypography variant="caption">Sr. Customer Manager</MuiTypography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <MuiTypography variant="caption">Email</MuiTypography>
                                        <MuiTypography variant="h6">alene_work@company.com</MuiTypography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs={6}>
                                                <MuiTypography variant="caption">Phone</MuiTypography>
                                                <MuiTypography variant="h6">380-293-0177</MuiTypography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <MuiTypography variant="caption">Location</MuiTypography>
                                                <MuiTypography variant="h6">Port Narcos</MuiTypography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid xs={12} sm container spacing={gridSpacing}>
                                            <Grid item xs={6}>
                                                <Button variant="outlined" color="primary" fullWidth startIcon={<ChatBubbleTwoToneIcon />}>
                                                    Message
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button variant="outlined" color="secondary" fullWidth startIcon={<CallTwoToneIcon />}>
                                                    Call
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <div className={classes.info} style={{ width: 318 }}>
                        <Paper
                            elevation={0}
                            sx={{
                                border: '1px solid',
                                borderColor: theme.palette.primary.light,
                                ':hover': {
                                    boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
                                },
                                background: '#fafafa'
                            }}
                        >
                            <PerfectScrollbar component="div" className={classes.ScrollHeight}>
                                <Grid
                                    container
                                    spacing={gridSpacing}
                                    sx={{
                                        padding: theme.spacing(3)
                                    }}
                                >
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={1}>
                                            <Grid item>
                                                <Avatar className={classes.avtLarge} src="/broken-image.jpg" />
                                            </Grid>
                                            <Grid item xs>
                                                <Grid container spacing={1}>
                                                    <Grid item xs={12}>
                                                        <Button
                                                            variant="outlined"
                                                            color="primary"
                                                            size="small"
                                                            startIcon={<PublishTwoToneIcon />}
                                                        >
                                                            Upload
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <MuiTypography variant="caption">Image size should be 125kb Max.</MuiTypography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <IconButton component="span">
                                                    <CancelTwoToneIcon />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Divider className={classes.divider} />
                                    <Grid item xs={12}>
                                        <FormControl fullWidth className={classes.margin}>
                                            <TextField
                                                label="Name"
                                                id="standard-start-adornment"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <BusinessTwoToneIcon
                                                                stroke={1.5}
                                                                size="1.3rem"
                                                                className={classes.startAdornment}
                                                            />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item>
                                        <MuiTypography variant="h3" gutterBottom>
                                            h3. Heading
                                        </MuiTypography>
                                    </Grid>
                                    <Grid item>
                                        <MuiTypography variant="h4" gutterBottom>
                                            h4. Heading
                                        </MuiTypography>
                                    </Grid>
                                    <Grid item>
                                        <MuiTypography variant="h5" gutterBottom>
                                            h5. Heading
                                        </MuiTypography>
                                    </Grid>
                                    <Grid item>
                                        <MuiTypography variant="h6" gutterBottom>
                                            h6. Heading
                                        </MuiTypography>
                                    </Grid>
                                </Grid>
                            </PerfectScrollbar>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Card;
