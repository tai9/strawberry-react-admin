import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        padding: '20px'
    },
    title: {
        fontSize: '15px',
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
        borderColor: ' rgb(227, 242, 253)'
    },
    table: {
        padding: '20px'
    },
    tbCell: {
        borderBottom: 'none',
        padding: '10px 25px',
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
            <div className={classes.table}>
                <TableContainer>
                    <Table className={classes.table}>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell className={classes.tbCell}>
                                        {row.time}
                                        <div className={classes.description}> {row.level}</div>
                                    </TableCell>
                                    <TableCell className={classes.tbCell}>
                                        {row.content}
                                        <div className={classes.description}>{row.scholl}</div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
