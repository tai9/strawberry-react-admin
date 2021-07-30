import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Paper from '@material-ui/core/Paper';
import { columnDataGrid, rowDataGrid } from '../../../_mockApis/forms/table/data';

export default function DataGridDemo() {
    return (
        <Paper>
            <div style={{ padding: '18px', fontSize: '20px', fontWeight: '500' }}>Data Grid</div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rowDataGrid} columns={columnDataGrid} pageSize={5} checkboxSelection disableSelectionOnClick />
            </div>
        </Paper>
    );
}
