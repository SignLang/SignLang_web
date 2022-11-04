import React, { useState, useEffect } from "react";

import { Trans } from "react-i18next";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import "./css/TeamSlide.css";

import xcho from "../media/images/xcho.jpeg";

const carouselResponsiveOptions = {
    0: {
        items: 1
    },
    600: {
        items: 2
    },
    900: {
        items: 3
    }
};

function useForceUpdate(){
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
}

function TeamSlide(props) {
    const { t } = props;
    const forceUpdate = useForceUpdate();

    const members = t("team_slide.members", {returnObjects: true});

    useEffect(() => {
        forceUpdate();
    }, [props.languageChanged]);

    return (
        <>
            <Box sx={{
                display: {
                    xs: "none",
                    md: "flex"
                },
                padding: 10,
                flexDirection: "column"
            }} xs={6}>
                <Typography
                    variant="h2"
                    fontFamily="'Montserrat', sans-serif"
                >
                    {t("team_slide.title")}
                </Typography>

                <br/>
                <br/>
                <Divider />

                <div className="carousel">
                    <Trans i18nKey="members">
                        <OwlCarousel className="owl-theme" loop margin={100} center autoplay responsive={carouselResponsiveOptions} dots={false}>
                            {
                                members.map((item, index) => {
                                    return (
                                        <div className="member item" key={index}>
                                            <img src={xcho} style={{filter: `hue-rotate(${index * 60}deg)`}} alt="member" />
                                            <h3 className="member-name">{item}</h3>
                                        </div>
                                    );
                                })
                            }
                        </OwlCarousel>
                    </Trans>
                </div>    
            </Box>

            <Container sx={{
                display: {
                    md: "none"
                }
            }}>
                <Typography
                    variant="h3"
                    fontFamily="'Montserrat', sans-serif"
                    textAlign="center"
                    width={window.innerWidth > 900 ? "auto" : "80%"}
                    margin="auto"
                >
                    {t("team_slide.title")}
                </Typography>   

                <br/>
                <br/>
                <Divider />

                <div className="carousel" style={{width: "70%"}} >
                    <OwlCarousel className="owl-theme" loop margin={100} center autoplay responsive={carouselResponsiveOptions} dots={false}>
                        {
                            members.map((item, index) => {
                                return (
                                    <div className="member item" key={index}>
                                        <img src={xcho} style={{filter: `hue-rotate(${index * 60}deg)`}} alt="member" />
                                        <h3 className="member-name">{item}</h3>
                                    </div>
                                );
                            })
                        }
                    </OwlCarousel>

                    {/* <OwlCarousel className="owl-theme" loop margin={100} center autoplay responsive={carouselResponsiveOptions} dots={false} >
                        <div className="member item">
                            <img src={xcho} style={{filter: "hue-rotate(0deg)"}} alt="member" />
                            <h3 className="member-name">Alex Aramyan</h3>
                        </div>
                        <div className="member item">
                            <img src={xcho} style={{filter: "hue-rotate(60deg)"}} alt="member" />
                            <h3 className="member-name">Gegham Zakaryan</h3>
                        </div>
                        <div className="member item">
                            <img src={xcho} style={{filter: "hue-rotate(120deg)"}} alt="member" />
                            <h3 className="member-name">Elen Arakelyan</h3>
                        </div>
                        <div className="member item">
                            <img src={xcho} style={{filter: "hue-rotate(180deg)"}} alt="member" />
                            <h3 className="member-name">Milena Ghazaryan</h3>
                        </div>
                        <div className="member item">
                            <img src={xcho} style={{filter: "hue-rotate(240deg)"}} alt="member" />
                            <h3 className="member-name">Hovhannes Tumanyan</h3>
                        </div>
                        <div className="member item">
                            <img src={xcho} style={{filter: "hue-rotate(300deg)"}} alt="member" />
                            <h3 className="member-name">Ruben Sargsyan</h3>
                        </div>
                    </OwlCarousel> */}
                </div>
            </Container>

            <Divider variant="middle" />
        </>
    );
}

export default TeamSlide;
