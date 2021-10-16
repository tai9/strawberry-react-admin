import React from 'react';
import { useTranslation } from 'react-i18next';

// material-ui
import TranslateIcon from '@material-ui/icons/Translate';
import { makeStyles } from '@material-ui/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// style constant
const useStyles = makeStyles((theme) => ({
    bgTranslate: {
        color: '#1e88e5',
        width: '34px',
        border: '1px solid',
        cursor: 'pointer',
        height: '34px',
        fontSize: '1.2rem',
        background: '#e3f2fd',
        transition: 'all .2s ease-in-out',
        borderColor: '#e3f2fd',
        borderRadius: '8px'
    },
    btnTranslate: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        boxSizing: 'border-box',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        userSelect: 'none',
        verticalAlign: 'middle',
        appearance: 'none',
        textDecoration: 'none',
        color: 'inherit',
        borderRadius: '12px',
        paddingTop: '4px'
    }
}));

const Translate = () => {
    const classes = useStyles();

    const { i18n } = useTranslation();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (language) => {
        setAnchorEl(null);
        i18n.changeLanguage(language);
    };
    return (
        <div className={classes.bgTranslate}>
            <div
                className={classes.btnTranslate}
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <TranslateIcon className={classes.iconTranslate} />
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                <MenuItem onClick={() => handleClose('vn')}>Viet Nam</MenuItem>
                <MenuItem onClick={() => handleClose('en')}>English</MenuItem>
                <MenuItem onClick={() => handleClose('cn')}>China</MenuItem>
            </Menu>
        </div>
    );
};

export default Translate;
