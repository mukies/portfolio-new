import AboutImg from "../../assets/me.jpeg";
import TextChange from "../TextChange";
const About = () => {
  return (
    <div
      id="About"
      className=" text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 lg:mx-20 bg-opacity-30 rounded-lg sm:p-8 flex flex-col gap-5"
    >
      <h2 className="text-4xl font-bold text-center underline">About Me</h2>
      <div className=" w-[90%] mx-auto sm:p-8 flex flex-col gap-4 rounded-lg  bg-[#171d32]">
        <div className="md:flex flex-wrap flex-col xl:flex-row md:gap-2 items-center justify-between">
          <div className=" flex-[0.6]">
            <div className=" md:h-80 md:w-80 h-60 w-60 mx-auto rounded-full border-[16px] border-[#314077] overflow-hidden">
              <img
                className="h-full w-full object-cover object-top"
                src={AboutImg}
                alt="About img"
              />
            </div>
          </div>

          <div className=" flex flex-col flex-1 gap-2 py-2 px-1 sm:gap-4">
            <div className="flex flex-col gap-8">
              <div className=" text-xl lg:text-2xl flex flex-col sm:flex-row sm:gap-2 font-semibold">
                <span>I&apos;m Mukesh and I&apos;m a</span> <TextChange />
              </div>
              <p className=" text-lg sm:text-xl">
                <strong>Hi there!</strong> I am a skilled Full Stack Developer
                specializing in the MERN stack. I have experience building
                dynamic web applications, including social media platforms with
                real-time messaging and JWT-based authentication, and tour
                booking systems with eSewa and Khalti integration. My work
                involves modern frameworks like React, Node.js, Express.js, and
                MongoDB, along with state management tools like Zustand. I’m
                passionate about solving complex problems and delivering
                seamless web experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
