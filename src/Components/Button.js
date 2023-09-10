import React from "react";
import { Link } from "react-router-dom";
const Button = ({ color, text,to }) => {
    return (
        <Link to={to}>
        <button className="hover:bg-vividgray mr-4 rounded-lg flex text-2xl font-medium bg-pumpkinyellow text-black py-2 shadow-custom px-8 mt-12">{text}
        </button>
        </Link>
    );
};

export default Button;