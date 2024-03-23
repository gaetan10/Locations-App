import React, { useState } from "react";
import { Link } from "react-router-dom";

import './MainNavigation.css'
import MainHeader from "./MainHeader.js";
import NavLinks from "./NavLinks.js";
import SideDrawer from "./SideDrawer.js";
import Backdrop from "../Backdrop.js";

function MainNavigation() {

    const [sideDrawerIsOpen, setSideDrawerIsOpen] = useState(false);

    function openingSideDrawerHandler(){
        setSideDrawerIsOpen(true)
    }

    function closingSideDrawerHandler(){
        setSideDrawerIsOpen(false)
    }

    return (
        <>
        {sideDrawerIsOpen && <Backdrop onClick={closingSideDrawerHandler}/>}
        {sideDrawerIsOpen && <SideDrawer>
            <nav className="main-drawer__drawer-nav">
                <NavLinks></NavLinks>
            </nav>
        </SideDrawer>}
    <MainHeader>
            <button onClick={openingSideDrawerHandler} className="main-navigation__menu-btn">
                <span />
                <span />
                <span />
            </button>
        <h1 className="main-navigation__title">
           <Link to={'/'}> Places </Link>
        </h1>
        <nav className="main-navigation__header-nav">
            <NavLinks></NavLinks>
        </nav>
    </MainHeader>
    </>
    )
};

export default MainNavigation;