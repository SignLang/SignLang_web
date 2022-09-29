import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./css/TeamSlide.css";

import xcho from "../media/images/xcho.jpeg";

const carouselResponsiveOptions = {
    0: {
        items: 1
    },
    480: {
        items: 2
    },
    800: {
        items: 3
    }
};

function TeamSlide() {
    return (
        <div className="container maxcontent-container">
            <div className="container slide-container maxcontent-container">
                <h1 className="slide-title">
                    Meet our team
                </h1>
            </div>
            <div className="carousel">
                <OwlCarousel className="owl-theme" loop margin={100} center autoplay responsive={carouselResponsiveOptions} dots={false} >
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
                </OwlCarousel>
            </div>

            <hr className="container-separator" />
        </div>
    );
}

export default TeamSlide;
