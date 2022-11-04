import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import MenuComponent from "./Components/MenuBar";
import WelcomeSlide from "./Components/WelcomeSlide";
import ProjectSlide from "./Components/ProjectSlide";
import TeamSlide from "./Components/TeamSlide";
import Footer from "./Components/Footer";

import "./App.css";

import "./i18nextInit";

function App() {
    const { t, i18n } = useTranslation();

    const [language, setLanguage] = useState("en");
    
    const [languageChanged, setLanguageChanged] = useState(true);

    function changeLanguage(lng) {
        setLanguage(lng);
    }
    
    useEffect(() => {        
        i18n.changeLanguage(language, () => {
            setLanguageChanged(!languageChanged);
            // console.log(t("team_slide.members", {returnObjects: true}));
        });
    }, [language]);

    return (
        <div className="App">
            <MenuComponent t={t} />

            <WelcomeSlide t={t} />
            <ProjectSlide t={t} />
            <TeamSlide t={t} languageChanged={languageChanged} />

            <Footer handler={lng => changeLanguage(lng)} />
        </div>
    );
}

// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             language: "en"
//         };

//         this.handler = this.handler.bind(this);
//     }

//     changeLanguage(lng) {
//         this.setState({
//             language: lng
//         });
//     }

//     render() {
//         return (
//             <div className="App">
//                 <MenuComponent />

//                 <WelcomeSlide />
//                 <ProjectSlide />
//                 <TeamSlide />

//                 <Footer handler={this.hindler} />
//             </div>
//         );
//     }
// }

export default App;
