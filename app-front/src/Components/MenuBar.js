import React, { useState } from "react";

import Button from "@mui/material/Button";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Drawer from "@mui/material/Drawer";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger"
import { styled } from "@mui/material/styles"

import { ButtonSignLangMui } from "./Button";

const Item = styled(Button)(({theme}) => (
    {
        padding: theme.spacing(1),
        textAlign: "center",
        color: "#1F37D6",
        fontFamily: "'Montserrat', sans-serif",
        textTransform: "none",
        fontSize: "large",
        borderRadius: "9px",
        width: "100%"
    }
));

function ElevationScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
      color: trigger ? "default" : "transparent"
    });
}

function MenuComponent(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const { t } = props;

    const pages = t("pages", {returnObjects: true});

    const handleToggleDrawer = () => {
        setMenuOpen(!menuOpen);
    };

    const drawer = (
        <Box onClick={handleToggleDrawer} sx={{textAlign: "center", width: 240}}>
            <List>
                <ListItem>
                    <ListItemText primary={(
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: "'Montserrat', sans-serif",
                                textAlign: "center"
                            }}
                        >
                            {pages[0]}
                        </Typography>
                        )} />
                </ListItem>
                <Divider />
                {pages.slice(1, -1).map((item, index) => (
                    <ListItem key={index}>
                        <ListItemButton>
                            <ListItemText primary={(
                                <Typography sx={{
                                    textAlign: "center",
                                    fontFamily: "'Montserrat', sans-serif",
                                    color: "#1F37D6"
                                }}>
                                    {item}
                                </Typography>
                            )} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <Divider />
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary={(
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    fontFamily: "'Montserrat', sans-serif",
                                    color: "#1F37D6"
                                }}
                            >
                                {pages[pages.length - 1]}
                                {/* Contact us */}
                            </Typography>
                        )}/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{flexGrow: 1}}>
            <ElevationScroll>
                <AppBar component="nav">
                    <Toolbar sx={{
                        padding: 2,
                        justifyContent: "space-between",
                    }}
                    >
                        <Box sx={{display: {xs: "flex", md: "none"}, justifyContent: "space-between", width: "100%"}}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleToggleDrawer}
                                sx={{display: {md: "none"}}}
                            >
                                <MenuIcon />
                            </IconButton>
                            <ButtonSignLangMui variant="contained"  >{t("bttn_try")}</ButtonSignLangMui>
                        </Box>

                        <Grid container sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
                            <Grid item container xs={7} spacing={2} justifyContent="flex-start" alignItems="center" sx={{display: {xs: "none", md: "flex"}}}>
                                <Grid item xs={2} md={3} >
                                    <Item>{pages[0]}</Item>
                                </Grid>
                                {pages.slice(1, -1).map((item, index) => (
                                    <Grid item xs={2} md={3} key={index}>
                                        <Item>{item}</Item>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid item container xs={5} spacing={2} justifyContent="flex-end" alignItems="center" sx={{display: {xs: "none", md: "flex"}}}>
                                <Grid item xs={3} md={4}>
                                    <Item>{pages[pages.length - 1]}</Item>
                                </Grid>
                                <Grid item>
                                    <ButtonSignLangMui variant="contained">{t("bttn_try")}</ButtonSignLangMui>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Box>
                <Drawer
                    container={document.querySelector("body")}
                    variant="temporary"
                    open={menuOpen}
                    onClose={handleToggleDrawer}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box'},
                    }}
                >
                {drawer}
                </Drawer>
            </Box>  
        </Box>
    );
}

export default MenuComponent;
