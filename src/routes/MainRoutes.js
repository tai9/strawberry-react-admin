import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import MainLayout from './../layout/MainLayout';
import Loadable from '../ui-component/Loadable';

// template application
import TemplateSocialProfile from '../views/application/user/social-profile';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Default')));
const CustomerList = Loadable(lazy(() => import('../views/application/customer/customer-list')));
const OrderList = Loadable(lazy(() => import('../views/application/customer/order-list')));
const ProductList = Loadable(lazy(() => import('../views/application/customer/product')));
const ProductReview = Loadable(lazy(() => import('../views/application/customer/product-review')));

const DashBoardAnalytics = Loadable(lazy(() => import('../views/dashboard/analytics')));

// widget routing
const Statistics = Loadable(lazy(() => import('../views/widget/Statistics')));
const Chart = Loadable(lazy(() => import('../views/widget/Chart')));

// application routing
const ApplicationContactCard = Loadable(lazy(() => import('../views/application/contact/Card')));
const ApplicationContactList = Loadable(lazy(() => import('../views/application/contact/List')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('../views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('../views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('../views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('../views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('../views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('../views/sample-page')));

// application routing
const ProFile = Loadable(lazy(() => import('../views/application/user/social-profile/profile/ProFile')));
const Follower = Loadable(lazy(() => import('../views/application/user/social-profile/followers')));
const Friend = Loadable(lazy(() => import('../views/application/user/social-profile/friends')));
const Gallery = Loadable(lazy(() => import('../views/application/user/social-profile/gallery')));
const FriendRequest = Loadable(lazy(() => import('../views/application/user/social-profile/friend-request')));

// forms routing
const BacisTable = Loadable(lazy(() => import('../views/forms/table/BacisTable')));
const DenceTable = Loadable(lazy(() => import('../views/forms/table/DenceTable')));
const DataTable = Loadable(lazy(() => import('../views/forms/table/DataTable')));
const CustomTable = Loadable(lazy(() => import('../views/forms/table/CustomTable')));
const CollapseTable = Loadable(lazy(() => import('../views/forms/table/CollapseTable')));
const EnhancedTable = Loadable(lazy(() => import('../views/forms/table/EnhancedTable')));
const FixedHeader = Loadable(lazy(() => import('../views/forms/table/FixedHeader')));

// application routing
const Profile1 = Loadable(lazy(() => import('../views/application/user/account-profile/Profile1')));
const Profile2 = Loadable(lazy(() => import('../views/application/user/account-profile/Profile2')));
const Profile3 = Loadable(lazy(() => import('../views/application/user/account-profile/Profile3')));

//-----------------------|| MAIN ROUTING ||-----------------------//

const MainRoutes = () => {
    const location = useLocation();

    return (
        <Route
            path={[
                '/dashboard/default',
                '/customer/customer-list',
                '/customer/order-list',
                '/customer/product',
                '/dashboard/analytics',
                '/customer/product-review',

                '/application/contact/cards',
                '/application/contact/list',

                '/widget/statistics',
                '/widget/chart',

                '/utils/util-typography',
                '/utils/util-color',
                '/utils/util-shadow',

                '/icons/tabler-icons',
                '/icons/material-icons',
                '/sample-page',

                '/user/social-profile/posts',
                '/user/social-profile/follower',

                '/user/social-profile/follower',
                '/user/social-profile/friends',
                '/user/social-profile/gallery',
                '/user/social-profile/friend-request',

                '/user/account-profile/profile1',
                '/user/account-profile/profile2',
                '/user/account-profile/profile3',
                '/user/social-profile/friends',
                '/user/social-profile/gallery',
                '/user/social-profile/friend-request',

                '/table/basic-table',
                '/table/dence-table',
                '/table/data-table',
                '/table/custom-table',
                '/table/collapse-table',
                '/table/enhanced-table',
                '/table/fixed-header'
            ]}
        >
            <MainLayout>
                <Switch location={location} key={location.pathname}>
                    <Route path="/dashboard/default" component={DashboardDefault} />
                    <Route path="/dashboard/analytics" component={DashBoardAnalytics} />

                    <Route path="/customer/customer-list" component={CustomerList} />
                    <Route path="/customer/order-list" component={OrderList} />
                    <Route path="/customer/product" component={ProductList} />
                    <Route path="/customer/product-review" component={ProductReview} />
                    <Route path="/application/contact/cards" component={ApplicationContactCard} />
                    <Route path="/application/contact/list" component={ApplicationContactList} />

                    <Route path="/widget/statistics" component={Statistics} />
                    <Route path="/widget/chart" component={Chart} />

                    <Route path="/utils/util-typography" component={UtilsTypography} />
                    <Route path="/utils/util-color" component={UtilsColor} />
                    <Route path="/utils/util-shadow" component={UtilsShadow} />
                    <Route path="/icons/tabler-icons" component={UtilsTablerIcons} />
                    <Route path="/icons/material-icons" component={UtilsMaterialIcons} />
                    <Route path="/sample-page" component={SamplePage} />

                    {/* Change your path */}
                    <TemplateSocialProfile path="/user/social-profile/posts" Component={ProFile} />
                    <TemplateSocialProfile path="/user/social-profile/follower" Component={Follower} />
                    <TemplateSocialProfile path="/user/social-profile/friends" Component={Friend} />
                    <TemplateSocialProfile path="/user/social-profile/gallery" Component={Gallery} />
                    <TemplateSocialProfile path="/user/social-profile/friend-request" Component={FriendRequest} />

                    <Route path="/table/basic-table" component={BacisTable} />
                    <Route path="/table/dence-table" component={DenceTable} />
                    <Route path="/table/data-table" component={DataTable} />
                    <Route path="/table/custom-table" component={CustomTable} />
                    <Route path="/table/collapse-table" component={CollapseTable} />
                    <Route path="/table/enhanced-table" component={EnhancedTable} />
                    <Route path="/table/fixed-header" component={FixedHeader} />

                    {/* <Route path="/user/social-profile/posts" component={AppUserSocialProfile} /> */}

                    <Route path="/user/account-profile/profile1" component={Profile1} />
                    <Route path="/user/account-profile/profile2" component={Profile2} />
                    <Route path="/user/account-profile/profile3" component={Profile3} />
                    {/* Change your path */}
                    <TemplateSocialProfile path="/user/social-profile/posts" Component={ProFile} />
                    <TemplateSocialProfile path="/user/social-profile/follower" Component={Follower} />
                </Switch>
            </MainLayout>
        </Route>
    );
};

export default MainRoutes;
