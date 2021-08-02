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
    createData(
        'Current',
        'Senior',
        'Senior UI/UX designer',
        'Perform task related to project manager with the 100+ team under my observation. Team management is key role in this company.'
    ),
    createData('2017-2019', 'Junior', 'Trainee cum Project Manager', 'Microsoft, TX, USA')
];

export default function Employment() {
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
                                    <TableCell style={{ width: '29%' }} className={classes.tbCell}>
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
