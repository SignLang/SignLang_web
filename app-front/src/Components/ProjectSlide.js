import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";

function ProjectSlide(props) {
    const { t } = props;
    
    return (
        <>
            <Box maxWidth={true} height="100vh" alignItems="center" sx={{display: {xs: "none", md: "flex"}}}>
                <Grid container>
                    <Grid item xs={7} padding={10}>
                        <Typography variant="h2" fontFamily="'Montserrat', sans-serif">
                            { t("project_slide.title") }
                        </Typography>
                        <br/>
                        <Divider />
                        <br/>
                        <Typography variant="h5" fontFamily="'Montserrat', sans-serif" color="#3f3f3f">
                            { t(t("project_slide.description")) }
                        </Typography>
                        <br/><br/>
                    </Grid>
                </Grid>
            </Box>

            <Container sx={{
                display: {xs: "flex", md: "none"},
                height: "100vh",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
            }}>
                <Paper sx={{
                    width: "80%",
                    padding: 3
                }} elevation={10}>
                    <Typography variant="h3" fontFamily="'Montserrat', sans-serif">
                        Project
                    </Typography>
                    <br/><br/>
                    <Typography fontSize="0.85em" fontFamily="'Montserrat', sans-serif" color="#3f3f3f">
                        {/* SignLang is an innovative sign language 
                        translator. <br/>
                        Deaf and mute people struggle to adapt in 
                        soiety because others find it hard 
                        to understand them. <br/>
                        To solve this problem we suggest 
                        software that translates sign language 
                        into natural language so that user can 
                        understand signs shown 
                        by a sign language user. */}

                        { t("project_slide.description") }
                    </Typography>
                    <br/><br/>
                    <Link
                        href="#"
                        sx={{
                            textDecoration: "none",
                            color: "#1F37D6"
                        }}
                    >
                        For more visit our <u>Project</u> page
                    </Link>
                </Paper>
            </Container>
        </>
    );
}

export default ProjectSlide;
