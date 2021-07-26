// assets
import { IconNfc } from '@tabler/icons';

// constant
const icons = {
    IconNfc: IconNfc
};

//-----------------------|| EXTRA PAGES MENU ITEMS ||-----------------------//

export const application = {
    id: 'application',
    title: 'Application',
    type: 'group',
    children: [
        {
            id: 'contact',
            title: 'Contact',
            type: 'collapse',
            icon: icons['IconNfc'],
            children: [
                {
                    id: 'cards',
                    title: 'Cards',
                    type: 'item',
                    url: '/application/contact/cards',
                    breadcrumbs: false
                },
                {
                    id: 'list',
                    title: 'List',
                    type: 'item',
                    url: '/application/contact/list',
                    breadcrumbs: false
                }
            ]
        }
    ]
};
