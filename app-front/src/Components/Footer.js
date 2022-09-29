import React, {useState} from "react";
// import {Router, Link} from "react-router-dom";

import { UilGlobe } from '@iconscout/react-unicons';
import { UilAngleDown } from '@iconscout/react-unicons';
import { UilInstagram } from '@iconscout/react-unicons';
import { UilLinkedinAlt } from '@iconscout/react-unicons';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import "./css/Footer.css";

const url_insta = "https://www.instagram.com/signlang.ai/";
const url_linkedin = "https://www.linkedin.com/company/signlang-ai/";

function Footer() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div className="footer-block">
            <div className="language-block">
                <Button
                    id="language-selector"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <UilGlobe className="globe-icon" />
                    <span><b>English</b></span>
                    <UilAngleDown />
                </Button>
            
                <Menu
                    id="language-context-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose} className="menu-item"><b>Հայերեն</b></MenuItem>
                    <MenuItem onClick={handleClose} className="menu-item"><b>Русский</b></MenuItem>
                    <MenuItem onClick={handleClose} className="menu-item"><b>Français</b></MenuItem>
                </Menu>
            </div>

            <div className="social-block">
                <a href={url_insta}><UilInstagram /></a>
                <a href={url_linkedin}><UilLinkedinAlt /></a>
            </div>
        </div>
    );
}

export default Footer;
