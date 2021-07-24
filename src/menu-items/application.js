// assets
import { IconDashboard } from '@tabler/icons';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

// constant
const icons = {
    IconDashboard: IconDashboard,
    ShoppingBasketOutlinedIcon
};

//-----------------------|| DASHBOARD MENU ITEMS ||-----------------------//

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
                }
            ]
        }
    ]
};
