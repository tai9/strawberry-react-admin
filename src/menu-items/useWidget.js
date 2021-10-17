// assets
import { IconChartArcs, IconDeviceAnalytics, IconChartInfographic } from '@tabler/icons';

import { useTranslation } from 'react-i18next';
// constant
const icons = {
    IconChartArcs: IconChartArcs,
    IconChartInfographic: IconChartInfographic,
    IconDeviceAnalytics
};

//-----------------------|| WIDGET MENU ITEMS ||-----------------------//

const useWidget = () => {
    const { t } = useTranslation();
    const widget = {
        id: 'widget',
        title: t('menu.menu7'),
        type: 'group',
        children: [
            {
                id: 'statistics',
                title: t('menu.menu7__title_1'),
                type: 'item',
                url: '/widget/statistics',
                icon: icons['IconChartArcs'],
                breadcrumbs: false
            },
            {
                id: 'chart',
                title: t('menu.menu7__title_2'),
                type: 'item',
                url: '/widget/chart',
                icon: icons['IconChartInfographic'],
                breadcrumbs: false
            }
        ]
    };
    return { widget };
};

export default useWidget;
