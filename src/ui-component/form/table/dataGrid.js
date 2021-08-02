import * as React from 'react';

//material-ui
import { DataGrid } from '@material-ui/data-grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';

//import data
import { columnDataGrid, rowDataGrid } from '../../../_mockApis/forms/table/data';

const useStyles = makeStyles((theme) => ({
    header: { padding: '20px 15px', fontSize: '25px', borderBottom: '1px solid rgba(224, 224, 224, 1)', color: 'black' },
    grid: { height: 400, width: '100%' }
}));
export default function DataGridDemo() {
    const classes = useStyles();

    return (
        <Paper>
            <div className={classes.header}>Data Grid</div>
            <div className={classes.grid}>
                <DataGrid rows={rowDataGrid} columns={columnDataGrid} pageSize={5} checkboxSelection disableSelectionOnClick />
            </div>
        </Paper>
    );
}
