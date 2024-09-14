import avatarImg from "../../assets/boy.png";
import TextChange from "../TextChange";
import "./style.css";

const Home = () => {
  return (
    <div className="hero text-white flex flex-col lg:flex-row w-full h-auto lg:h-[calc(100vh-80px)] justify-between items-start p-5 md:p-20">
      <div className="lg:w-3/4 w-full h-full mt-10 sm:mt-0 px-2 md:pt-12  ">
        <div className="flex flex-col gap-3 text-center sm:text-start">
          <span className=" text-xl md:text-3xl">Hello, my name is</span>
          <span className="text-4xl md:text-7xl font-semibold">
            Mukesh Bhattarai
          </span>
          <div className="text-xl sm:text-2xl md:text-4xl flex gap-2 justify-center sm:justify-start leading-normal tracking-tighter">
            <span>and i am a</span> <TextChange />
          </div>
        </div>

        <div className=" flex gap-2 justify-center md:justify-normal sm:gap-4">
          <a
            href="#Footer"
            className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Contact Me
          </a>
          <a
            href="/full-stack1.pdf"
            download="mukesh-cv.pdf"
            className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl border-2 border-[#5466ad]"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="mt-10 sm:mt-5">
        <img
          className=" h-auto lg:w-[450px] w-[350px] object-cover transform scale-x-[-1]"
          src={avatarImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
