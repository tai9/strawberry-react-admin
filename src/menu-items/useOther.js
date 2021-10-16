// assets
import { IconBrandChrome, IconHelp, IconSitemap } from '@tabler/icons';

import { useTranslation } from 'react-i18next';

// constant
const icons = {
    IconBrandChrome: IconBrandChrome,
    IconHelp: IconHelp,
    IconSitemap: IconSitemap
};

//-----------------------|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||-----------------------//

const useOther = () => {
    const { t } = useTranslation();

    const other = {
        id: 'sample-docs-roadmap',
        type: 'group',
        children: [
            {
                id: 'sample-page',
                title: t('menu.menu4__title_1'),
                type: 'item',
                url: '/sample-page',
                icon: icons['IconBrandChrome'],
                breadcrumbs: false
            },
            {
                id: 'documentation',
                title: t('menu.menu4__title_2'),
                type: 'item',
                url: 'https://codedthemes.gitbook.io/berry/',
                icon: icons['IconHelp'],
                external: true,
                target: true
            }
        ]
    };
    return { other };
};

export default useOther;
