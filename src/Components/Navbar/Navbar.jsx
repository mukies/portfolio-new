/* eslint-disable react/prop-types */
import { useState } from "react";
import { RiMenu2Line } from "@remixicon/react";
import nameImg from "../../assets/name.png";
import { FaXmark } from "react-icons/fa6";

const Links = ({ children, href }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className=" relative cursor-pointer rounded-md"
    >
      <a href={href} className=" p-1 flex flex-col items-center justify-center">
        <span className="text-md capitalize  transition-all duration-300 p-1 md:p-0">
          {children}
        </span>
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-1 left-0 right-0 h-1 origin-left scale-x-0 rounded-full bg-red-500 transition-transform duration-300 ease-out"
        />
      </a>
    </div>
  );
};

const Navbar = ({ isVisible }) => {
  const [showMenu, setShowmenu] = useState(false);
  const social = [
    {
      name: "facebook",
      href: "https://www.facebook.com/mukesh.bhattarai.75",
      classname: "devicon-facebook-plain",
    },
    {
      href: "https://github.com/mukies",
      classname: "devicon-github-original ",
      name: "github",
    },
    {
      href: "https://www.linkedin.com/in/mukesh-bhattarai-720238157?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      classname: "devicon-linkedin-plain",
      name: "linkedin",
    },
  ];
  const links = [
    {
      name: "home",
      href: "#Home",
    },
    {
      name: "about",
      href: "#About",
    },
    {
      name: "skills",
      href: "#Skills",
    },
    {
      name: "projects",
      href: "#Projects",
    },
    {
      name: "contact",
      href: "#Footer",
    },
  ];
  const close = () => {
    document.body.style.overflow = "auto";
    setShowmenu(false);
  };
  return (
    <>
      <nav
        className={`transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "sm:-translate-y-full"
        } flex flex-wrap sticky z-50 top-0 h-[60px] sm:h-20  justify-between items-center text-white px-2 sm:px-10   md:px-20 bg-[#3e4970]`}
      >
        <div className="">
          <img
            src={nameImg}
            alt="name-logo"
            className=" h-[35px] sm:h-[50px] w-auto object-cover"
          />
        </div>

        <div
          className={`mx-24 p-y2 mt-4 font-semibold md:mt-0 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent hidden md:mx-0 md:flex gap-6`}
        >
          {links.map((itm, i) => (
            <Links key={i} href={itm.href}>
              {itm.name}
            </Links>
          ))}
        </div>

        <RiMenu2Line
          size={28}
          className="md:hidden cursor-pointer"
          onClick={() => {
            document.body.style.overflow = "hidden";
            setShowmenu(true);
          }}
        />

        <div className=" hidden lg:flex items-center gap-4">
          {social.map((scl, i) => (
            <a key={i} href={scl.href} title={scl.name} target="_blank">
              <i className={` ${scl.classname} text-3xl`}></i>
            </a>
          ))}
        </div>
      </nav>
      {showMenu && (
        <div
          className={` bg-[#171d32] z-[100] p-3 flex flex-col text-white gap-3 fixed top-0 left-0 right-0 bottom-0 justify-center items-center`}
        >
          <div
            onClick={close}
            className="absolute flex justify-center items-center top-0 right-0 h-10 w-10 cursor-pointer rounded-full bg-[#324897] hover:bg-[#1e2c5c] duration-300"
          >
            <span>
              <FaXmark size={30} />
            </span>
          </div>

          {links.map((item, i) => (
            <a
              href={item.href}
              onClick={close}
              key={i}
              className=" p-2 border rounded-md border-[#41528f] w-[90%] hover:bg-[#41528f] duration-300 flex justify-center items-center"
            >
              <span className="capitalize">{item.name}</span>
            </a>
          ))}
          <div className=" flex gap-8 mt-10 items-center">
            {social.map((scl, i) => (
              <a key={i} href={scl.href} title={scl.name} target="_blank">
                <i className={` ${scl.classname} text-3xl`}></i>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
