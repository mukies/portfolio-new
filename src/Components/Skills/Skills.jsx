const Skills = () => {
  const frontend = [
    {
      name: "html",
      classname: "devicon-html5-plain colored",
    },
    {
      name: "css",
      classname: "devicon-css3-plain colored",
    },
    {
      name: "javascript",
      classname: "devicon-javascript-plain colored",
    },
    {
      name: "tailwind",
      classname: "devicon-tailwindcss-original colored",
    },
    {
      name: "react",
      classname: "devicon-react-original colored",
    },
    {
      name: "next-js",
      classname: "devicon-nextjs-plain text-white",
    },
  ];

  const backend = [
    {
      name: "node",
      classname: "devicon-nodejs-plain-wordmark colored",
    },
    {
      name: "express",
      classname: "devicon-express-original colored text-white",
    },
    {
      name: "nest",
      classname: "devicon-nestjs-original colored",
    },
  ];

  const database = [
    {
      name: "mongoDB",
      classname: "devicon-mongodb-plain colored",
    },
    {
      name: "postgreSql",
      classname: "devicon-postgresql-plain colored",
    },
  ];

  return (
    <div id="Skills" className="p-10 lg:p-20 ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap flex-col lg:flex-row items-start justify-evenly">
        <div className="flex flex-col flex-1 gap-10  md:p-8 py-10">
          <span className=" text-2xl text-white font-semibold">
            Frontend Skills
          </span>
          <div className=" flex gap-8 items-center flex-wrap">
            {frontend.map((itm, i) => (
              <div
                key={i}
                className="flex flex-col gap-1 items-center lg:hover:scale-110 duration-300 cursor-pointer"
              >
                <div
                  key={i}
                  className="p-3 bg-zinc-950 flex flex-col gap-1 items-center rounded-2xl"
                >
                  {/* <SiRedis color="#FF4438" size={50} /> */}

                  <i className={` ${itm.classname} text-3xl xl:text-5xl `}></i>
                </div>
                <span className=" text-xl font-semibold capitalize text-white">
                  {itm.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-10  md:p-8 py-10">
          <span className=" text-2xl text-white font-semibold">
            Backend Skills
          </span>
          <div className=" flex gap-8 items-center flex-wrap">
            {backend.map((itm, i) => (
              <div
                key={i}
                className="flex flex-col gap-1 items-center lg:hover:scale-110 duration-300 cursor-pointer"
              >
                <div
                  key={i}
                  className="p-3 bg-zinc-950 flex flex-col gap-1 items-center rounded-2xl"
                >
                  {/* <SiRedis color="#FF4438" size={50} /> */}

                  <i className={` ${itm.classname} text-3xl xl:text-5xl`}></i>
                </div>
                <span className=" text-xl font-semibold capitalize text-white">
                  {itm.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col  flex-1 gap-10  md:p-8 py-10">
          <span className=" text-2xl text-white font-semibold">Databases</span>
          <div className=" flex gap-8 flex-wrap items-center">
            {database.map((itm, i) => (
              <div
                key={i}
                className="flex flex-col gap-1 items-center lg:hover:scale-110 duration-300 cursor-pointer"
              >
                <div
                  key={i}
                  className="p-3 bg-zinc-950 flex flex-col gap-1 items-center rounded-2xl"
                >
                  {/* <SiRedis color="#FF4438" size={50} /> */}

                  <i className={` ${itm.classname} text-3xl xl:text-5xl`}></i>
                </div>
                <span className=" text-xl font-semibold capitalize text-white">
                  {itm.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
