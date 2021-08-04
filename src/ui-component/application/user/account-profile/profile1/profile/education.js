import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        padding: '20px'
    },
    title: {
        fontSize: '0.875rem',
        color: 'rgb(33, 33, 33)',
        fontWeight: '500',
        fontFamily: ' Roboto, sans-serif',
        flex: '1 1 auto'
    },
    tagHr: {
        margin: '0px',
        flexShrink: 0,
        borderWidth: '0px 0px thin',
        borderStyle: 'solid',
        opacity: 1,
        borderColor: ' rgb(227, 242, 253)'
    },
    table: {
        padding: '20px',
        flexShrink: 0,
        borderWidth: '0px 0px thin',
        borderStyle: 'solid',
        opacity: 1,
        borderColor: ' rgb(227, 242, 253)'
    },
    tbCell: {
        padding: '0px',
        fontWeight: 600
    },
    description: {
        fontWeight: 400,
        fontSize: '12px'
    }
}));
function createData(time, level, content, scholl) {
    return { time, level, content, scholl };
}
const rows = [
    createData('2014-2017', 'Master Degree', 'Master Degree in Computer Application', 'University of Oxford, England'),
    createData('2011-2013', 'Bachelor', 'Bachelor Degree in Computer Engineering', 'Imperial College London'),
    createData('2009-2011', 'School', 'Higher Secondary Education', 'School of London, England')
];

export default function Education() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.header}>
                <div className={classes.title}>Education</div>
            </div>
            <hr className={classes.tagHr} />

            {rows.map((row) => (
                <div className={classes.table}>
                    <Grid container>
                        <Grid item xs={12} md={5}>
                            <div className={classes.tbCell}>
                                {row.time}
                                <div className={classes.description}> {row.level}</div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <div className={classes.tbCell}>
                                {row.content}
                                <div className={classes.description}>{row.scholl}</div>
                            </div>
                        </Grid>
                    </Grid>{' '}
                </div>
            ))}
        </div>
    );
}
