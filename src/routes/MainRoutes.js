import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import MainLayout from './../layout/MainLayout';
import Loadable from '../ui-component/Loadable';

// template application
import TemplateSocialProfile from '../views/application/user/socialprofile/TemplateSocialProfile';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Default')));
const CustomerList = Loadable(lazy(() => import('../views/application/customer/customer-list')));
const OrderList = Loadable(lazy(() => import('../views/application/customer/order-list')));
const ProductList = Loadable(lazy(() => import('../views/application/customer/product')));
const ProductReview = Loadable(lazy(() => import('../views/application/customer/product-review')));

const DashBoardAnalytics = Loadable(lazy(() => import('../views/dashboard/Analytics/index')));

// widget routing
const Statistics = Loadable(lazy(() => import('../views/widget/statistics')));

// application routing
const ApplicationContactCard = Loadable(lazy(() => import('../views/application/contact/Card')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('../views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('../views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('../views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('../views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('../views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('../views/sample-page')));

// application routing
const ProFile = Loadable(lazy(() => import('../views/application/user/socialprofile/ProFile')));
const Follower = Loadable(lazy(() => import('../views/application/user/socialprofile/followers/Follower')));
const Friend = Loadable(lazy(() => import('../views/application/user/socialprofile/friends/Friend')));

// forms routing
const BacisTable = Loadable(lazy(() => import('../views/forms/table/bacisTable')));
const DenceTable = Loadable(lazy(() => import('../views/forms/table/denceTable')));
const DataTable = Loadable(lazy(() => import('../views/forms/table/dataTable')));
const CustomTable = Loadable(lazy(() => import('../views/forms/table/customTable')));
const CollapseTable = Loadable(lazy(() => import('../views/forms/table/collapseTable')));
const EnhancedTable = Loadable(lazy(() => import('../views/forms/table/enhancedTable')));
const FixedHeader = Loadable(lazy(() => import('../views/forms/table/fixedHeader')));

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

                '/utils/util-typography',
                '/utils/util-color',
                '/utils/util-shadow',

                '/icons/tabler-icons',
                '/icons/material-icons',
                '/sample-page',

                '/user/social-profile/posts',
                '/user/social-profile/follower',
                '/user/social-profile/friends',

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
                    <Route path="/application/contact/list" component={DashboardDefault} />

                    <Route path="/widget/statistics" component={Statistics} />

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

                    <Route path="/table/basic-table" component={BacisTable} />
                    <Route path="/table/dence-table" component={DenceTable} />
                    <Route path="/table/data-table" component={DataTable} />
                    <Route path="/table/custom-table" component={CustomTable} />
                    <Route path="/table/collapse-table" component={CollapseTable} />
                    <Route path="/table/enhanced-table" component={EnhancedTable} />
                    <Route path="/table/fixed-header" component={FixedHeader} />
                </Switch>
            </MainLayout>
        </Route>
    );
};

export default MainRoutes;
