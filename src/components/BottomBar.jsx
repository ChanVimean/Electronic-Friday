import { AiFillHome } from "react-icons/ai";
import { FaCartShopping, FaCircleQuestion } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <div className="absolute flex lg:hidden justify-evenly bottom-0 bg-blue-200 w-full py-6 text-2xl font-semibold">
      <div className="flex flex-col items-center">
        <AiFillHome size={40} />
        <Link to="/">Home</Link>
      </div>

      <div className="flex flex-col items-center">
        <FaCircleQuestion size={40} />
        <Link to="/about">About</Link>
      </div>

      <div className="flex flex-col items-center">
        <IoMdContact size={40} />
        <Link to="/">Contact</Link>
      </div>

      
      <div className="flex flex-col items-center">
        <FaCartShopping size={40} />
        <Link to="/product">Product</Link>
      </div>
    </div>
  );
};

export default BottomBar;
