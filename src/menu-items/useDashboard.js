// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

import { useTranslation } from 'react-i18next';
// constant
const icons = {
    IconDashboard: IconDashboard,
    IconDeviceAnalytics
};
//-----------------------|| DASHBOARD MENU ITEMS ||-----------------------//

const useDashboard = () => {
    const { t } = useTranslation();
    const dashboard = {
        id: 'dashboard',
        title: t('menu.menu2'),
        type: 'group',
        children: [
            {
                id: 'default',
                title: t('menu.menu2__title_1'),
                type: 'item',
                url: '/dashboard/default',
                icon: icons['IconDashboard'],
                breadcrumbs: false
            },
            {
                id: 'analytics',
                title: t('menu.menu2__title_2'),
                type: 'item',
                url: '/dashboard/analytics',
                icon: icons['IconDeviceAnalytics'],
                breadcrumbs: false
            }
        ]
    };
    return { dashboard };
};

export default useDashboard;
