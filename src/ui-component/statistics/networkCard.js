import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ShareIcon from '@material-ui/icons/Share';
import RouterIcon from '@material-ui/icons/Router';
import FilterVintageOutlinedIcon from '@material-ui/icons/FilterVintageOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    item: {
        padding: '20px',
        borderLeft: '1px solid',
        borderBottom: '1px solid',
        borderLeftColor: '#eeeeee',
        borderBottomColor: '#eeeeee'
    },
    img: { color: '#673ab7', width: '45px', height: '45px', padding: '10px', borderRadius: '14px', backgroundColor: '#e3f2fd' },
    content: {
        margin: '0 15px',
        textAlign: 'center'
    },
    data: {
        fontSize: 15,
        fontWeight: 500,
        color: 'black',
        marginBottom: '3px'
    },
    title: {
        fontSize: 12,
        fontWeight: 400
    }
}));
export default function NetworkCard() {
    const classes = useStyles();

    return (
        <div>
            <Paper>
                <Grid container>
                    {' '}
                    <Grid className={classes.item} item xs={6}>
                        <Grid container>
                            <Grid xs={6} sm={6} lg={5} item>
                                <ShareIcon className={classes.img} />
                            </Grid>
                            <Grid xs={6} sm={6} lg={7} item>
                                <div className={classes.content}>
                                    <div className={classes.data}>1000</div>
                                    <div className={classes.title}>SHARES</div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={classes.item} item xs={6}>
                        <Grid container>
                            <Grid xs={6} sm={6} lg={5} item>
                                <RouterIcon className={classes.img} />
                            </Grid>
                            <Grid xs={6} sm={6} lg={7} item>
                                <div className={classes.content}>
                                    <div className={classes.data}>600</div>
                                    <div className={classes.title}>NETWORK</div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={classes.item} item xs={6}>
                        <Grid container>
                            <Grid xs={6} sm={6} lg={5} item>
                                <FilterVintageOutlinedIcon className={classes.img} />
                            </Grid>
                            <Grid xs={6} sm={6} lg={7} item>
                                <div className={classes.content}>
                                    <div className={classes.data}>3550</div>
                                    <div className={classes.title}>RETURNS</div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={classes.item} item xs={6}>
                        <Grid container>
                            <Grid xs={6} sm={6} lg={5} item>
                                <LocalMallOutlinedIcon className={classes.img} />
                            </Grid>
                            <Grid xs={6} sm={6} lg={7} item>
                                <div className={classes.content}>
                                    <div className={classes.data}>100%</div>
                                    <div className={classes.title}>ORDER</div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
