import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="w-full min-h-[200px] mt-32 p-16 flex flex-col space-y-4 items-center justify-center bg-black">
      <div className="w-max h-max flex items-center justify-center mb-4 space-x-4">
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
          <FaFacebookF color="black" size={26} />
        </div>
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
          <BsTwitter color="black" size={22} />
        </div>
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
          <AiFillInstagram color="black" size={26} />
        </div>
      </div>
      <div className="w-max h-max flex-row space-x-6">
        <span className="text-gray-300">Info</span>
        <span className="text-gray-300">Suporte</span>
        <span className="text-gray-300">Contato</span>
      </div>
      <span className="text-gray-600">@ 2023 MegaFlix</span>
    </div>
  );
}
