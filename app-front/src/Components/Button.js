import React from "react";

import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";

// import "./css/Button.css";

const bttn_style = {
    color: "white",
    backgroundColor: "#1F37D6",
    borderRadius: "9px",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: "700",
    fontSize: "large",
    padding: "0.5rem 1.5rem",
    textTransform: "none",
    ":hover": {
        "backgroundColor": "#1A2DB1"
    }
};

function ButtonSignLangRegular(props) {
    return (
        <button className={`bttn ${props.className}`} onClick={props.onClick}>
            {props.label}
        </button>
    );
}

const ButtonSignLangMui = styled(Button)(
    bttn_style
);

export {
    ButtonSignLangRegular,
    ButtonSignLangMui
};

