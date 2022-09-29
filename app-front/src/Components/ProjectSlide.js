import React from "react";

import "./css/WelcomeSlide.css";
import "./css/ProjectSlide.css";

function ProjectSlide() {
    return (
        <div className="container">
            <div className="container slide-container">
                <h1 className="slide-title">
                    Project
                </h1>
                <h2 className="slide-description">
                    SignLang is an innovative sign language 
                    translator. <br/>
                    Deaf and mute people struggle to adapt in 
                    soiety because others find it hard 
                    to understand them. <br/>
                    To solve this problem we suggest 
                    software that translates sign language 
                    into natural language so that user can 
                    understand signs shown 
                    by a sign language user. 
                </h2>
                
                <h3 className="text-visit-project"> For more visit our <u>Project</u> page  </h3>
            </div>

            {/* <hr className="container-separator"/> */}
        </div>
    );
}

export default ProjectSlide;
