import React, { useEffect, useCallback, useState } from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Button, Grid, InputAdornment, OutlinedInput } from '@material-ui/core';

// project imports
import { gridSpacing } from '../../../store/constant';
import MainCard from '../../../ui-component/cards/MainCard';
import ContactInfoList from './ContactInfoList';
import ContactForm from './ContactForm';
import ContactInfoForm from './ContactInfoForm';
import DividerBlock from './DividerBlock';

// assets
import { IconSearch } from '@tabler/icons';
import { AddCircleOutline } from '@material-ui/icons';

// mock data
import { contactData } from '../../../_mockApis/application/contact/data';

// style constant
const useStyles = makeStyles((theme) => ({
    startAdornment: {
        color: theme.palette.grey[500]
    }
}));

//==============================|| CONTACT CARD ||==============================//

const List = () => {
    const classes = useStyles();

    const [showContactForm, setShowContactForm] = useState(false);
    const [showContactInfoForm, setShowContactInfoForm] = useState(false);
    const [data, setData] = useState();

    const formatDataByName = useCallback(() => {
        let dataFormated = { ...data };
        contactData.forEach((contact) => {
            const key = contact.name.charAt(0);
            if (key in dataFormated) {
                dataFormated[key].push(contact);
            } else {
                dataFormated[key] = [{ ...contact }];
            }
        });
        setData(dataFormated);
    }, [data]);

    useEffect(() => {
        formatDataByName();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderContactData = () => {
        let element = [];
        for (var key in data) {
            const e = (
                <>
                    <Grid item xs={12}>
                        <DividerBlock label={key} />
                    </Grid>
                    {data[key].map((item) => (
                        <Grid key={item.id} item xs={12} sm={12}>
                            <ContactInfoList data={item} handleShowInfo={handleShowInfoForm} />
                        </Grid>
                    ))}
                </>
            );
            element.push(e);
        }
        return (
            <>
                {element.map((v, i) => (
                    <React.Fragment key={i}>{v}</React.Fragment>
                ))}
            </>
        );
    };

    const handleShowInfoForm = () => {
        setShowContactInfoForm(true);
        setShowContactForm(false);
    };
    const handleShowContactForm = () => {
        setShowContactInfoForm(false);
        setShowContactForm(true);
    };

    return (
        <MainCard title="Contact List">
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
                                onClick={handleShowContactForm}
                            >
                                Add
                            </Button>
                        </Grid>
                        {renderContactData()}
                    </Grid>
                </Grid>
                {showContactForm && (
                    <Grid item>
                        <ContactForm onToggleForm={() => setShowContactForm(!showContactForm)} />
                    </Grid>
                )}
                {showContactInfoForm && (
                    <Grid item>
                        <ContactInfoForm onToggleForm={() => setShowContactInfoForm(!showContactInfoForm)} />
                    </Grid>
                )}
            </Grid>
        </MainCard>
    );
};

export default List;
