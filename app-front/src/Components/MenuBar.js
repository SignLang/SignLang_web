import React, { useEffect, useState } from "react";

// import Button from "./Button";
// import Button from "@mui/material/Button";
import {ButtonSignLangMui} from "./Button";

import "./css/MenuBar.css";

function MenuComponent() {
    return (
        <div className="menu">
            <div className="menu-left">
                <ul>
                    <li className="menu-item">SignLang</li>
                    <li className="menu-item">Product</li>
                    <li className="menu-item">Solution</li>
                    <li className="menu-item">About us</li>
                </ul>
            </div>
            <div className="menu-right">
                <ul>
                    <li className="menu-item">Contact</li>
                    <li className="menu-item">
                        {/* <Button label="Try SignLang free"/> */}
                        <ButtonSignLangMui variant="contained">Try SignLang free</ButtonSignLangMui>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MenuComponent;
