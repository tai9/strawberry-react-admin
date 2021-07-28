// assets
import { IconNfc, IconUserCheck } from '@tabler/icons';

// constant
const icons = {
    IconNfc: IconNfc,
    IconUserCheck: IconUserCheck
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
        },
        {
            id: 'users',
            title: 'Users',
            type: 'collapse',
            icon: icons['IconUserCheck'],
            children: [
                {
                    id: 'socialprofile',
                    title: 'Social Profile',
                    type: 'item',
                    url: '/user/social-profile/posts',
                    target: false
                }
                // {
                //     id: 'register3',
                //     title: 'Register',
                //     type: 'item',
                //     url: '/pages/register/register3',
                //     target: true
                // }
            ]
        }
    ]
};
