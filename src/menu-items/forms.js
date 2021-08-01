// assets
import { IconTable, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconTable: IconTable,
    IconDeviceAnalytics
};

//-----------------------|| EXTRA PAGES MENU ITEMS ||-----------------------//

export const forms = {
    id: 'forms',
    title: 'Forms',
    type: 'group',
    children: [
        {
            id: 'table',
            title: 'Table',
            type: 'collapse',
            icon: icons['IconTable'],
            children: [
                {
                    id: 'basicTable',
                    title: 'Basic Table',
                    type: 'item',
                    url: '/table/basic-table'
                },
                {
                    id: 'denceTable',
                    title: 'Dence Table',
                    type: 'item',
                    url: '/table/dence-table'
                },
                {
                    id: 'enhancedTable',
                    title: 'Enhanced Table',
                    type: 'item',
                    url: '/table/enhanced-table'
                },
                {
                    id: 'dataTable',
                    title: 'Data Table',
                    type: 'item',
                    url: '/table/data-table'
                },
                {
                    id: 'customTable',
                    title: 'Custom Table',
                    type: 'item',
                    url: '/table/custom-table'
                },
                {
                    id: 'fixedHeader',
                    title: 'Fixed Header',
                    type: 'item',
                    url: '/table/fixed-header'
                },
                {
                    id: 'collapseTable',
                    title: 'Collapse Table',
                    type: 'item',
                    url: '/table/collapse-table'
                }
            ]
        }
    ]
};
