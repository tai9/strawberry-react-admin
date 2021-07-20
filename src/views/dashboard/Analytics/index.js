import React from 'react';

// material-ui
import { Grid } from '@material-ui/core';

// project imports
import MarketShare from './MarketShare';
import SocialNetwork from './SocialNetwork';
import TotalRevenue from './TotalRevenue';

//-----------------------|| DEFAULT DASHBOARD ||-----------------------//

const Analytics = () => {
    // const [isLoading, setLoading] = useState(true);
    // useEffect(() => {
    //     setLoading(false);
    // }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={8} direction="column">
                <Grid item>
                    <MarketShare />
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid item>
                    <SocialNetwork />
                </Grid>
                <Grid item>
                    <TotalRevenue />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Analytics;
