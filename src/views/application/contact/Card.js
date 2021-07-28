import React from 'react';

// material-ui
import { makeStyles, useTheme } from '@material-ui/styles';
import {
    Avatar,
    Button,
    Divider,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    Typography,
    OutlinedInput,
    Paper,
    TextField
} from '@material-ui/core';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import { gridSpacing } from './../../../store/constant';
import MainCard from './../../../ui-component/cards/MainCard';
import MenuCustom from './Menu';

// assets
import { IconSearch } from '@tabler/icons';
import { AddCircleOutline, BusinessTwoTone, CallTwoTone, CancelTwoTone, ChatBubbleTwoTone, PublishTwoTone } from '@material-ui/icons';
import man1 from './../../../assets/images/avatars/man1.png';

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

//==============================|| CONTACT CARD ||==============================//

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
                            <Button variant="contained" color="primary" size="large" startIcon={<AddCircleOutline />}>
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
                            <Typography
                                sx={{
                                    color: theme.palette.primary.main
                                }}
                                variant="h4"
                            >
                                A
                            </Typography>
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
                                        <Typography variant="h3">Alene</Typography>
                                        <Typography variant="caption">Sr. Customer Manager</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="caption">Email</Typography>
                                        <Typography variant="h6">alene_work@company.com</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs={6}>
                                                <Typography variant="caption">Phone</Typography>
                                                <Typography variant="h6">380-293-0177</Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography variant="caption">Location</Typography>
                                                <Typography variant="h6">Port Narcos</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid xs={12} sm container spacing={gridSpacing}>
                                            <Grid item xs={6}>
                                                <Button variant="outlined" color="primary" fullWidth startIcon={<ChatBubbleTwoTone />}>
                                                    Message
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button variant="outlined" color="secondary" fullWidth startIcon={<CallTwoTone />}>
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
                                                            startIcon={<PublishTwoTone />}
                                                        >
                                                            Upload
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography variant="caption">Image size should be 125kb Max.</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <IconButton component="span">
                                                    <CancelTwoTone />
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
                                                            <BusinessTwoTone
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
                                        <Typography variant="h3" gutterBottom>
                                            h3. Heading
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h4" gutterBottom>
                                            h4. Heading
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h5" gutterBottom>
                                            h5. Heading
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h6" gutterBottom>
                                            h6. Heading
                                        </Typography>
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
