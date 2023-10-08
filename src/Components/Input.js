
const Input = ({ type, placeholder, style}) => {
 

  return (
    <input type={type} placeholder={placeholder} className="border-2 border-gray p-3 rounded-lg w-[400px] bg-pumpkinyellow" style={style}/>
  );
}

export default Input;
