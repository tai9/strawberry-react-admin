// assets
import { IconTable, IconDeviceAnalytics } from '@tabler/icons';

import { useTranslation } from 'react-i18next';

// constant
const icons = {
    IconTable: IconTable,
    IconDeviceAnalytics
};

//-----------------------|| EXTRA PAGES MENU ITEMS ||-----------------------//

const useForms = () => {
    const { t } = useTranslation();
    const forms = {
        id: 'forms',
        title: t('menu.menu3'),
        type: 'group',
        children: [
            {
                id: 'table',
                title: t('menu.menu3__title_1'),
                type: 'collapse',
                icon: icons['IconTable'],
                children: [
                    {
                        id: 'basicTable',
                        title: t('menu.menu3__title_1--children1'),
                        type: 'item',
                        url: '/table/basic-table'
                    },
                    {
                        id: 'denceTable',
                        title: t('menu.menu3__title_1--children2'),
                        type: 'item',
                        url: '/table/dence-table'
                    },
                    {
                        id: 'enhancedTable',
                        title: t('menu.menu3__title_1--children3'),
                        type: 'item',
                        url: '/table/enhanced-table'
                    },
                    {
                        id: 'dataTable',
                        title: t('menu.menu3__title_1--children4'),
                        type: 'item',
                        url: '/table/data-table'
                    },
                    {
                        id: 'customTable',
                        title: t('menu.menu3__title_1--children5'),
                        type: 'item',
                        url: '/table/custom-table'
                    },
                    {
                        id: 'fixedHeader',
                        title: t('menu.menu3__title_1--children6'),
                        type: 'item',
                        url: '/table/fixed-header'
                    },
                    {
                        id: 'collapseTable',
                        title: t('menu.menu3__title_1--children17'),
                        type: 'item',
                        url: '/table/collapse-table'
                    }
                ]
            }
        ]
    };

    return { forms };
};

export default useForms;
