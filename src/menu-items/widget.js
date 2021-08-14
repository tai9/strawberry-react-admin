// assets
import { IconChartArcs, IconDeviceAnalytics, IconChartInfographic } from '@tabler/icons';

// constant
const icons = {
    IconChartArcs: IconChartArcs,
    IconChartInfographic: IconChartInfographic,
    IconDeviceAnalytics
};

//-----------------------|| WIDGET MENU ITEMS ||-----------------------//

export const widget = {
    id: 'widget',
    title: 'Widget',
    type: 'group',
    children: [
        {
            id: 'statistics',
            title: 'Statistics',
            type: 'item',
            url: '/widget/statistics',
            icon: icons['IconChartArcs'],
            breadcrumbs: false
        },
        {
            id: 'chart',
            title: 'Chart',
            type: 'item',
            url: '/widget/chart',
            icon: icons['IconChartInfographic'],
            breadcrumbs: false
        }
    ]
};
