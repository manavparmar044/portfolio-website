import Image from "next/image";
import ideaImage from "../assets/images/idea.png";

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000000,#010412_30%,#020924_50%,#041148_70%,#061D6C_90%,#0A2A90)] py-[72px] relative overflow-clip">
      <div className="absolute h-[400px] w-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#0A2A90]  bg-[radial-gradient(closest-side,#000_82%,#0A2A90)] top-[calc(100%-96px)] sm:h-[768px] sm:w-[1536px] sm:py-24 sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex justify-center">
        <div className="bg-gray-950 border border-gray-200 px-4 py-1 inline-flex items-center justify-center gap-4 rounded-md">
            <div className="bg-green-500 size-2.5 rounded-full">
            </div>
            <div className="text-sm text-center font-medium">Available for new projects</div>
        </div>
        </div>
        <div className="flex justify-center mt-11">
          <div className="inline-flex relative">
            <h1 className="text-5xl font-bold tracking-tighter text-center inline-flex sm:text-7xl">
              Crafting Scalable & Seamless Digital Experiences
            </h1>
            {/* <Image
              src={ideaImage}
              alt=""
              height="300"
              width="300"
              className="absolute left-[20px] top-[108px] hidden md:inline"
            />
            <Image
              src={ideaImage}
              alt=""
              height="300"
              width="300"
              className="absolute top-[40px] right-[20px] hidden md:inline"
            /> */}
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-11 max-w-lg">
            I specialize in designing and developing modern, high-performance
            web and mobile applications using React, Next.js, Node.js, and
            Firebase. With a focus on scalability, responsiveness, and seamless
            user experiences, I transform innovative ideas into reality.
          </p>
        </div>
        <div className="flex justify-center mt-11">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Let's connect
          </button>
        </div>
      </div>
    </div>
  );
};
