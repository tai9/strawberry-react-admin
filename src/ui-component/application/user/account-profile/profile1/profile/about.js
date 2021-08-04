import React from 'react';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
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
    introduce: {
        fontSize: '15px',
        fontWeight: '400',
        padding: '20px'
    },
    table: {
        padding: '20px'
    },
    tbCell: {
        borderBottom: 'none',
        padding: '10px 20px'
    }
}));
function createData(infor, dot, content) {
    return { infor, dot, content };
}
const rows = [
    createData('Full Name', ':', 'Anshan Handgun'),
    createData('Fathers Name', ':', 'Mr. Deepen Handgun'),
    createData('Address', ':', 'Street 110-B Kalians Bag, Dewan, M.P. INDIA'),
    createData('Zip Code', ':', '12345'),
    createData('Phone', ':', '+0 123456789 , +0 123456789'),
    createData('Email', ':', 'support@example.com'),
    createData('Website', ':', 'http://example.com')
];

export default function About() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.header}>
                <div className={classes.title}>About me</div>
                <IconButton aria-label="delete" size="small">
                    <EditTwoToneIcon color="primary" fontSize="inherit" />
                </IconButton>
            </div>
            <hr className={classes.tagHr} />
            <div className={classes.introduce}>
                Hello,I’m Anshan Handgun Creative Graphic Designer & User Experience Designer based in Website, I create digital Products a
                more Beautiful and usable place. Morbid accusant ipsum. Nam nec tellus at.
                <br /> <br /> <div className={classes.title}>Personal Details</div>
            </div>
            <hr className={classes.tagHr} />
            <div className={classes.table}>
                <TableContainer>
                    <Table className={classes.table}>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell style={{ fontWeight: 600 }} className={classes.tbCell}>
                                        {row.infor}
                                    </TableCell>
                                    <TableCell className={classes.tbCell}>{row.dot}</TableCell>
                                    <TableCell className={classes.tbCell}>{row.content}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
