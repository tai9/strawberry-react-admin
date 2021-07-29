//-----------------------|| DASHBOARD MENU ITEMS ||-----------------------//
import { IconKey, IconReceipt2, IconBug, IconBellRinging, IconPhoneCall, IconUserCheck } from '@tabler/icons';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

// constant
const icons = {
    IconUserCheck : IconUserCheck, //eltr
    IconKey: IconKey,
    IconReceipt2: IconReceipt2,
    IconBug: IconBug,
    IconBellRinging: IconBellRinging,
    IconPhoneCall: IconPhoneCall,
    ShoppingBasketOutlinedIcon: ShoppingBasketOutlinedIcon,
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
                },
            ],
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
                },
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
