import { Typewriter } from "react-simple-typewriter";

const TextChange = () => {
  const texts = [
    "Frontend Developer",
    "Backend Developer",
    "Full stack Developer",
    "MERN stack Developer",
  ];

  return (
    <h4 className=" font-semibold text-orange-400">
      <Typewriter
        words={texts}
        loop
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h4>
  );
};

export default TextChange;
