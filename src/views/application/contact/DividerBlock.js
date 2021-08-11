import React from 'react';

// material-ui
import { useTheme } from '@material-ui/styles';
import { Divider, Typography } from '@material-ui/core';

//==============================|| DIVIDER BLOCK||==============================//

const DividerBlock = ({ label, borderd }) => {
    const theme = useTheme();
    return (
        <>
            {borderd && (
                <Divider
                    sx={{
                        margin: '5px 0px 15px',
                        opacity: 1,
                        borderColor: theme.palette.primary.light
                    }}
                />
            )}

            <Typography
                sx={{
                    color: theme.palette.primary.main
                }}
                variant="h4"
            >
                {label}
            </Typography>
            {borderd && (
                <Divider
                    sx={{
                        margin: '15px 0px 5px',
                        opacity: 1,
                        borderColor: theme.palette.primary.light
                    }}
                />
            )}
        </>
    );
};

export default DividerBlock;
