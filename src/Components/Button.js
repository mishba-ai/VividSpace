import { Link } from "react-router-dom";

const Button = ({ color, text,to ,style }) => {
    return (
        <Link to={to}>
        <button className='hover:bg-darkyellow mr-4 rounded-lg text-2xl font-medium bg-pumpkinyellow text-black py-2 shadow-custom px-8 mt-12' style={style}>{text}
        </button>
        </Link>
    );
};

export default Button;