import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import { ButtonSignLangMui } from "./Button";

// import "./css/WelcomeSlide.css";

function WelcomeSlide(props) {
    const { t } = props;

    return (
        <>
            <Box maxWidth={true} height="100vh" alignItems="center" sx={{display: {xs: "none", md: "flex"}}}>
                <Grid container>
                    <Grid item md={7} lg={6} padding={10}>
                        <Typography variant="h2" fontFamily="'Montserrat', sans-serif">
                            {t("welcome_slide.title")}
                        </Typography>
                        <br/>
                        <Divider />
                        <br/>
                        <Typography variant="h5" fontFamily="'Montserrat', sans-serif" color="#3f3f3f">
                            {t("welcome_slide.description")}
                        </Typography>
                        <br/><br/>
                        <ButtonSignLangMui className="bttn-greeting">{t("bttn_try")}</ButtonSignLangMui>
                    </Grid>
                </Grid>
            </Box>

            <Container sx={{
                display: {xs: "flex", md: "none"},
                height: "100vh",
                width: "80%",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
            }}>
                <Typography variant="h4" fontFamily="'Montserrat', sans-serif">
                    {t("welcome_slide.title")}
                </Typography>
                <br/><br/>
                <Typography variant="h6" fontFamily="'Montserrat', sans-serif" color="#3f3f3f">
                    {t("welcome_slide.description")}
                </Typography>
                <br/><br/>
                <ButtonSignLangMui className="bttn-greeting">{t("bttn_try")}</ButtonSignLangMui>
            </Container>
        </>
    );
}

export default WelcomeSlide;
