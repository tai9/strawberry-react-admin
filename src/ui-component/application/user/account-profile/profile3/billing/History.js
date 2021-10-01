import React from 'react';

//material ui
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import Chip from '@material-ui/core/Chip';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//data import
import { dataHistory } from '../../../../../../_mockApis/application/users/account-profile/dataHistory.js';

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
        minWidth: 650
    },
    sttAwaiting: { height: '25px', color: 'white', background: 'rgb(103, 58, 183)' },
    sttPaid: { height: '25px', color: 'white', background: 'rgb(33, 150, 243)' },
    headerTable: {
        color: 'black'
    }
}));

const History = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.header}>
                <div className={classes.title}>Billing History</div>
            </div>
            <hr className={classes.tagHr} />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.headerTable}>Order No.</TableCell>
                            <TableCell className={classes.headerTable}>Date</TableCell>
                            <TableCell className={classes.headerTable}>Price</TableCell>
                            <TableCell className={classes.headerTable}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataHistory.map((row) => (
                            <TableRow hover key={row.name}>
                                <TableCell>{row.no}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.price}</TableCell>
                                <TableCell>
                                    {row.status === 'Awaiting' ? (
                                        <Chip label={row.status} className={classes.sttAwaiting} />
                                    ) : row.status === 'Paid' ? (
                                        <Chip label={row.status} className={classes.sttPaid} />
                                    ) : (
                                        <Chip label="Error" />
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
export default History;
