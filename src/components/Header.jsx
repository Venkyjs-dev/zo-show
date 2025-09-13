import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function Header() {
  return (
    <div className="flex justify-between ml-[15%] mr-[15%] p-[2%]">
      <p className="flex flex-row justify-center">
        <MdOutlineEmail className="text-blue-600 text-3xl  mx-[5px]" />
        <span className="">ask zo-show.com</span>
      </p>
      <div className="flex flex-row justify-center">
        <p className="flex flex-row justify-center">
          <FiPhoneCall className="text-blue-600 text-2xl  mx-[5px]" />
          <span>Call us: +91 720 777 9800</span>
        </p>
        <div className="w-[5px] text-blue-600 h-[20px] mx-[5px]">|</div>
        <div className="flex flex-row justify-around">
          <SiFacebook className="text-blue-600 text-3xl  mx-[5px]" />
          <FaLinkedin className="text-blue-600 text-3xl  mx-[5px]" />
          <FaSquareInstagram className="text-blue-600 text-3xl  mx-[5px]" />
          <FaSquareXTwitter className="text-blue-600 text-3xl  mx-[5px]" />
        </div>
      </div>
    </div>
  );
}
export default Header;
