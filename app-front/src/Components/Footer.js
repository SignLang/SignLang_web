import React, { useEffect, useState } from "react";

import { UilGlobe } from '@iconscout/react-unicons';
import { UilInstagram } from '@iconscout/react-unicons';
import { UilLinkedinAlt } from '@iconscout/react-unicons';

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Select from '@mui/material/Select';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';

import "./css/Footer.css";

const url_insta = "https://www.instagram.com/signlang.ai/";
const url_linkedin = "https://www.linkedin.com/company/signlang-ai/";

const languageMap = {
    en: { label: "English", dir: "ltr", active: true },
    hy: { label: "Հայերեն", dir: "ltr", active: false },
    ru: { label: "Русский", dir: "ltr", active: false },
    fr: { label: "Français", dir: "ltr", active: false }
};

function Footer(props) {
    const [anchorLanguage, setAnchorLanguage] = useState("en");
    
    const { handler } = props;

    const onChange = (event) => {
        setAnchorLanguage(event.target.value);

        handler(event.target.value);
    };

    useEffect(() => {
        console.log("anchorEl:", anchorLanguage);
    }, [anchorLanguage]);

    return(
        <Box sx={{
            padding: 3,
            display: "flex",
            justifyContent: "space-between"
        }}>
            <Box display="flex">
                <Box paddingTop={1} paddingBottom={1}>
                    <UilGlobe className="globe-icon" />
                </Box>
                <Select
                    value={anchorLanguage}
                    onChange={onChange}
                    
                    autoWidth

                    sx={{
                        boxShadow: "none",
                        '.MuiOutlinedInput-notchedOutline': { border: 0 },
                        ".MuiSelect-select": {paddingTop: 1, paddingBottom: 1}
                    }}
                >
                    {
                        Object
                        .keys(languageMap)
                        ?.map((item, index) => {
                            return (
                                <MenuItem className="menu-item" value={item} key={index} >
                                    <b>{languageMap[item].label}</b>
                                </MenuItem>
                            );
                        })
                    }
                </Select>
            </Box>

            <Grid container spacing={1} alignContent="center" width="auto">
                <Grid item sx={{color: "black", textDecoration: "none"}}>
                    <Link href={url_insta} underline="none" color="#000"><UilInstagram /></Link>
                </Grid>
                <Grid item sx={{color: "black", textDecoration: "none"}}>
                    <Link href={url_linkedin} underline="none" color="#000"><UilLinkedinAlt /></Link>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;
