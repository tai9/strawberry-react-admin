import React from 'react';

//material-ui
import { makeStyles } from '@material-ui/styles';
import women1 from '../../../../../../assets/images/avatars/women1.png';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import PhonelinkRingTwoToneIcon from '@material-ui/icons/PhonelinkRingTwoTone';
import PinDropTwoToneIcon from '@material-ui/icons/PinDropTwoTone';

const useStyles = makeStyles((theme) => ({
    infor: {
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    tagHr: {
        margin: '0px',
        flexShrink: 0,
        borderWidth: '0px 0px thin',
        borderStyle: 'solid',
        opacity: 1,
        borderColor: ' rgb(227, 242, 253)'
    },
    content: { padding: '10px' },
    avt: {
        width: '40px'
    },
    tag: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: ' 0.8125rem',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '24px',
        width: '33px',
        color: 'rgb(255, 255, 255)',
        backgroundColor: 'rgb(33, 150, 243)',
        borderRadius: '16px'
    },
    info: { display: 'flex' },
    display: { marginLeft: '15px' },
    name: { color: 'black !important', fontSize: '15px', fontWeight: '500', marginBottom: '5px' },
    job: { fontSize: '12px' },
    list: { padding: '8px 0px', position: 'relative' },
    listItem: {
        padding: '10px',
        borderWidth: '0px 0px thin',
        borderStyle: 'solid',
        opacity: 1,
        borderColor: ' rgb(227, 242, 253)',
        '&:hover': { backgroundColor: 'rgb(237, 231, 246)', color: 'rgb(94, 53, 177) !important' }
    },
    interactive: { padding: '20px' },
    interactiveItem: {
        textAlign: 'center'
    },
    data: {
        color: 'black !important',
        fontSize: '19px',
        fontWeight: '600'
    },
    title: { fontSize: '12px' },
    icon: {
        minWidth: '5px',
        width: '15%'
    }
}));
export default function ProfileCard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.infor}>
                <div className={classes.info}>
                    {' '}
                    <img className={classes.avt} src={women1} alt="avt" />
                    <div className={classes.display}>
                        <div className={classes.name}>Suzan</div>
                        <div className={classes.job}>UI/UX Designer</div>
                    </div>
                </div>
                <div className={classes.tag}>Pro</div>
            </div>
            <hr className={classes.tagHr} />
            <div className={classes.content}>
                <div className={classes.list}>
                    <List dense>
                        <ListItem className={classes.listItem} button>
                            <ListItemAvatar className={classes.icon}>
                                <MailTwoToneIcon />
                            </ListItemAvatar>
                            <ListItemText>Email</ListItemText>
                            <ListItemSecondaryAction>demo@sample.com</ListItemSecondaryAction>
                        </ListItem>
                        <ListItem className={classes.listItem} button>
                            <ListItemAvatar className={classes.icon}>
                                <PhonelinkRingTwoToneIcon />
                            </ListItemAvatar>
                            <ListItemText>Phone</ListItemText>
                            <ListItemSecondaryAction>(+99) 9999 999 999</ListItemSecondaryAction>
                        </ListItem>{' '}
                        <ListItem className={classes.listItem} button>
                            <ListItemAvatar className={classes.icon}>
                                <PinDropTwoToneIcon />
                            </ListItemAvatar>
                            <ListItemText>Location</ListItemText>
                            <ListItemSecondaryAction>Melbourne</ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </div>
                <div className={classes.interactive}>
                    <Grid container>
                        <Grid className={classes.interactiveItem} item xs={4}>
                            <div className={classes.data}>37</div>
                            <div className={classes.title}>Mails</div>
                        </Grid>
                        <Grid className={classes.interactiveItem} item xs={4}>
                            <div className={classes.data}>2749</div>
                            <div className={classes.title}>Followers</div>
                        </Grid>
                        <Grid className={classes.interactiveItem} item xs={4}>
                            <div className={classes.data}>678</div>
                            <div className={classes.title}>Following</div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}
