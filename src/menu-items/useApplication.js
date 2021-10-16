//-----------------------|| DASHBOARD MENU ITEMS ||-----------------------//
import { IconKey, IconReceipt2, IconBug, IconBellRinging, IconPhoneCall, IconUserCheck, IconNfc, IconUsers } from '@tabler/icons';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

import { useTranslation } from 'react-i18next';

// constant
const icons = {
    IconUserCheck: IconUserCheck,
    IconUsers: IconUsers,
    IconNfc: IconNfc,
    IconKey: IconKey,
    IconReceipt2: IconReceipt2,
    IconBug: IconBug,
    IconBellRinging: IconBellRinging,
    IconPhoneCall: IconPhoneCall,
    ShoppingBasketOutlinedIcon: ShoppingBasketOutlinedIcon
};

//-----------------------|| EXTRA PAGES MENU ITEMS ||-----------------------//

const useApplication = () => {
    const { t } = useTranslation();
    const application = {
        id: 'application',
        title: t('menu.menu1'),
        type: 'group',
        children: [
            {
                id: 'users',
                title: t('menu.menu1__title_1'),
                type: 'collapse',
                icon: icons['IconUserCheck'],
                children: [
                    {
                        id: 'social-profile',
                        title: t('menu.menu1__title_1--children1'),
                        type: 'item',
                        url: '/user/social-profile/posts',
                        target: false
                    },
                    {
                        id: 'accountProfile',
                        title: t('menu.menu1__title_1--children2'),
                        type: 'collapse',
                        target: false,
                        children: [
                            {
                                id: 'profile1',
                                title: t('menu.menu1__title_1--children2__title1'),
                                type: 'item',
                                url: '/user/account-profile/profile1',
                                breadcrumbs: false
                            },
                            {
                                id: 'profile2',
                                title: t('menu.menu1__title_1--children2__title2'),
                                type: 'item',
                                url: '/user/account-profile/profile2',
                                target: false
                            },
                            {
                                id: 'profile3',
                                title: t('menu.menu1__title_1--children2__title3'),
                                type: 'item',
                                url: '/user/account-profile/profile3',
                                target: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 'customer',
                title: t('menu.menu1__title_2'),
                type: 'collapse',
                icon: icons['IconUsers'],
                breadcrumbs: false,
                children: [
                    {
                        id: 'customer-list',
                        title: t('menu.menu1__title_2--children1'),
                        type: 'item',
                        url: '/customer/customer-list',
                        breadcrumbs: false
                    },
                    {
                        id: 'order-list',
                        title: t('menu.menu1__title_2--children2'),
                        type: 'item',
                        url: '/customer/order-list',
                        breadcrumbs: false
                    },
                    {
                        id: 'product',
                        title: t('menu.menu1__title_2--children3'),
                        type: 'item',
                        url: '/customer/product',
                        breadcrumbs: false
                    },
                    {
                        id: 'productReview',
                        title: t('menu.menu1__title_2--children4'),
                        type: 'item',
                        url: '/customer/product-review',
                        breadcrumbs: false
                    }
                ]
            },
            {
                id: 'contact',
                title: t('menu.menu1__title_3'),
                type: 'collapse',
                icon: icons['IconNfc'],
                children: [
                    {
                        id: 'cards',
                        title: t('menu.menu1__title_3--children1'),
                        type: 'item',
                        url: '/application/contact/cards',
                        breadcrumbs: false
                    },
                    {
                        id: 'list',
                        title: t('menu.menu1__title_3--children1'),
                        type: 'item',
                        url: '/application/contact/list',
                        breadcrumbs: false
                    }
                ]
            }
        ]
    };
    return { application };
};

export default useApplication;
