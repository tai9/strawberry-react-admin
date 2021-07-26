// assets
import { IconChartArcs, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconChartArcs: IconChartArcs,
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
        }
    ]
};
