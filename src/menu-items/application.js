// assets
import { IconKey, IconReceipt2, IconBug, IconBellRinging, IconPhoneCall, IconUserCheck } from '@tabler/icons';

// constant
const icons = {
    IconUserCheck : IconUserCheck, //eltr
    IconKey: IconKey,
    IconReceipt2: IconReceipt2,
    IconBug: IconBug,
    IconBellRinging: IconBellRinging,
    IconPhoneCall: IconPhoneCall
};

//-----------------------|| EXTRA PAGES MENU ITEMS ||-----------------------//

export const application = {
    id: 'application',
    title: 'Application',
    type: 'group',
    children: [
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
