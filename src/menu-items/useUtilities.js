// assets
import { IconBrandFramer, IconTypography, IconPalette, IconShadow, IconWindmill, IconLayoutGridAdd } from '@tabler/icons';

import { useTranslation } from 'react-i18next';

// constant
const icons = {
    IconTypography: IconTypography,
    IconPalette: IconPalette,
    IconShadow: IconShadow,
    IconWindmill: IconWindmill,
    IconBrandFramer: IconBrandFramer,
    IconLayoutGridAdd: IconLayoutGridAdd
};

//-----------------------|| UTILITIES MENU ITEMS ||-----------------------//

const useUtilities = () => {
    const { t } = useTranslation();
    const utilities = {
        id: 'utilities',
        title: t('menu.menu6'),
        type: 'group',
        children: [
            {
                id: 'util-typography',
                title: t('menu.menu6__title_1'),
                type: 'item',
                url: '/utils/util-typography',
                icon: icons['IconTypography'],
                breadcrumbs: false
            },
            {
                id: 'util-color',
                title: t('menu.menu6__title_2'),
                type: 'item',
                url: '/utils/util-color',
                icon: icons['IconPalette'],
                breadcrumbs: false
            },
            {
                id: 'util-shadow',
                title: t('menu.menu6__title_3'),
                type: 'item',
                url: '/utils/util-shadow',
                icon: icons['IconShadow'],
                breadcrumbs: false
            },
            {
                id: 'icons',
                title: t('menu.menu6__title_4'),
                type: 'collapse',
                icon: icons['IconWindmill'],
                children: [
                    {
                        id: 'tabler-icons',
                        title: t('menu.menu6__title_4--children1'),
                        type: 'item',
                        url: '/icons/tabler-icons',
                        breadcrumbs: false
                    },
                    {
                        id: 'material-icons',
                        title: t('menu.menu6__title_4--children2'),
                        type: 'item',
                        url: '/icons/material-icons',
                        breadcrumbs: false
                    }
                ]
            }
        ]
    };
    return { utilities };
};

export default useUtilities;
