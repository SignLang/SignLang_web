import React from "react";

import { ButtonSignLangMui } from "./Button";

import "./css/WelcomeSlide.css";

function WelcomeSlide() {
    return (
        <div className="container">
            <div className="container slide-container">
                <h1 className="slide-title">
                    Words behind silence
                </h1>
                <h2 className="slide-description">
                    Hey there! <br/> 
                    We are SignLang team and we 
                    are proud to present our real time
                    Sign Language translator.
                </h2>
                <ButtonSignLangMui className="bttn-greeting">Try SignLang free</ButtonSignLangMui>
                {/* <Button label="Try SignLang free" className="bttn-greeting" /> */}
            </div>
            {/* <hr className="container-separator"/> */}
        </div>
    );
}

export default WelcomeSlide;
