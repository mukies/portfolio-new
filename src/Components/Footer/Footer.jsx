import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center capitalize">
          <IoLocationSharp size={20} />
          bharatpur, chitwan
        </li>
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a
            className=" group hover:text-[#171d32] duration-200 "
            href="mailto:muk.yess@gmail.com"
          >
            muk.yess@gmail.com
          </a>
        </li>
        <li className="flex gap-1 items-center cursor-pointer">
          <FaGithub />
          <a
            className=" group hover:text-[#171d32] duration-200 "
            href="https://github.com/mukies"
            target="_blank"
          >
            github.com/mukies
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
