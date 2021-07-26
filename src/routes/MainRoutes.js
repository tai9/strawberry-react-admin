import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import MainLayout from './../layout/MainLayout';
import Loadable from '../ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Default')));

// widget routing
const Statistics = Loadable(lazy(() => import('../views/widget/statistics')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('../views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('../views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('../views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('../views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('../views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('../views/sample-page')));

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
                '/widget/statistics',
                '/utils/util-typography',
                '/utils/util-color',
                '/utils/util-shadow',
                '/icons/tabler-icons',
                '/icons/material-icons',
                '/sample-page',
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
                    <Route path="/widget/statistics" component={Statistics} />
                    <Route path="/utils/util-typography" component={UtilsTypography} />
                    <Route path="/utils/util-color" component={UtilsColor} />
                    <Route path="/utils/util-shadow" component={UtilsShadow} />
                    <Route path="/icons/tabler-icons" component={UtilsTablerIcons} />
                    <Route path="/icons/material-icons" component={UtilsMaterialIcons} />
                    <Route path="/sample-page" component={SamplePage} />
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
