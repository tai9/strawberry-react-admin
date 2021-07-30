import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Paper from '@material-ui/core/Paper';
import { columnDataGrid, rowDataGrid } from '../../../_mockApis/forms/table/data';

export default function DataGridDemo() {
    return (
        <Paper>
            <div style={{ padding: '20px 15px', fontSize: '25px', borderBottom: '1px solid rgba(224, 224, 224, 1)', color: 'black' }}>
                Data Grid
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rowDataGrid} columns={columnDataGrid} pageSize={5} checkboxSelection disableSelectionOnClick />
            </div>
        </Paper>
    );
}
