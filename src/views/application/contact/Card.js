import React, { useState } from 'react';

// material-ui
import { makeStyles, useTheme } from '@material-ui/styles';
import { Button, Divider, Grid, InputAdornment, Typography, OutlinedInput } from '@material-ui/core';

// project imports
import { gridSpacing } from './../../../store/constant';
import MainCard from './../../../ui-component/cards/MainCard';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

// assets
import { IconSearch } from '@tabler/icons';
import { AddCircleOutline } from '@material-ui/icons';

// style constant
const useStyles = makeStyles((theme) => ({
    startAdornment: {
        color: theme.palette.grey[500]
    }
}));

//==============================|| CONTACT CARD ||==============================//

const Card = () => {
    const classes = useStyles();
    const theme = useTheme();

    const [showContactForm, setShowContactForm] = useState(false);

    return (
        <MainCard title="Contact Cards">
            <Grid container spacing={gridSpacing}>
                <Grid item xs>
                    <Grid container spacing={gridSpacing} alignItems="baseline">
                        <Grid item xs>
                            <OutlinedInput
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
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                startIcon={<AddCircleOutline />}
                                onClick={() => setShowContactForm(true)}
                            >
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
                            <ContactInfo />
                        </Grid>
                    </Grid>
                </Grid>
                {showContactForm && (
                    <Grid item>
                        <ContactForm onToggleForm={() => setShowContactForm(!showContactForm)} />
                    </Grid>
                )}
            </Grid>
        </MainCard>
    );
};

export default Card;
