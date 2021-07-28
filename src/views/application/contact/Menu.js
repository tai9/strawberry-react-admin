import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

// assets
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

const ITEM_HEIGHT = 48;

export default function MenuCustom() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <MoreHorizOutlinedIcon
                style={{ cursor: 'pointer' }}
                fontSize="small"
                aria-controls="menu-popular-card"
                aria-haspopup="true"
                onClick={handleClick}
            />
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5
                        // width: '20ch'
                    }
                }}
                TransitionComponent={Fade}
                variant="selectedMenu"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem onClick={handleClose}>Today</MenuItem>
                <MenuItem onClick={handleClose}>This Month</MenuItem>
                <MenuItem onClick={handleClose}>This Year</MenuItem>
            </Menu>
        </div>
    );
}
