// import React from "react";
import Button from "./Button";
import logo from "../Assets/vividspace2.png"
import gridlogo from "../Assets/gridlogo.svg"
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <router>
            <header className="">
                <div className="flex h-32 bg-white justify-between px-10">
                    <img id="logo" src={logo} alt="logo" className="pt-3 w-42 h-auto"></img>
                    <div className="flex ">
                        <Button text="Sign In" to="/signin"/>
                        <Button text="Sign Up"/>
                        <img src={gridlogo} alt="grid" className="fill-curren mt-12"></img>
                    </div>
                </div>
            </header>


        </router>
    );
}

export default Header;