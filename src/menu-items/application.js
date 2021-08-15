//-----------------------|| DASHBOARD MENU ITEMS ||-----------------------//
import { IconKey, IconReceipt2, IconBug, IconBellRinging, IconPhoneCall, IconUserCheck, IconNfc } from '@tabler/icons';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

// constant
const icons = {
    IconUserCheck: IconUserCheck, //eltr
    IconNfc: IconNfc,
    IconKey: IconKey,
    IconReceipt2: IconReceipt2,
    IconBug: IconBug,
    IconBellRinging: IconBellRinging,
    IconPhoneCall: IconPhoneCall,
    ShoppingBasketOutlinedIcon: ShoppingBasketOutlinedIcon
};

//-----------------------|| EXTRA PAGES MENU ITEMS ||-----------------------//

export const application = {
    id: 'application',
    title: 'Application',
    type: 'group',
    children: [
        {
            id: 'customer',
            title: 'Customer',
            type: 'collapse',
            icon: icons['ShoppingBasketOutlinedIcon'],
            breadcrumbs: false,
            children: [
                {
                    id: 'customer-list',
                    title: 'Customer List',
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: false
                },
                {
                    id: 'order-list',
                    title: 'Order List',
                    type: 'item',
                    url: '/customer/order-list',
                    breadcrumbs: false
                },
                {
                    id: 'product',
                    title: 'Product',
                    type: 'item',
                    url: '/customer/product',
                    breadcrumbs: false
                },
                {
                    id: 'productReview',
                    title: 'Product Review',
                    type: 'item',
                    url: '/customer/product-review',
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
                    id: 'social-profile',
                    title: 'Social Profile',
                    type: 'item',
                    url: '/user/social-profile/posts',
                    target: false
                },
                {
                    id: 'accountProfile',
                    title: 'Account Profile',
                    type: 'collapse',
                    target: false,
                    children: [
                        {
                            id: 'profile1',
                            title: ' Profile 1',
                            type: 'item',
                            url: '/user/account-profile/profile1',
                            breadcrumbs: false
                        },
                        {
                            id: 'profile2',
                            title: ' Profile 2',
                            type: 'item',
                            url: '/user/account-profile/profile2',
                            target: false
                        },
                        {
                            id: 'profile3',
                            title: ' Profile 3',
                            type: 'item',
                            url: '/user/account-profile/profile3',
                            target: false
                        }
                    ]
                }
            ]
        },
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
