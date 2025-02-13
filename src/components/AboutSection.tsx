import Image from "next/image";
import { Card } from "./Card";
import bookImage from "../assets/images/build_dont_talk.jpg"

export const AboutSection = () => {
  return (
    <div className="bg-black text-white pb-94">
      <div className="container">
        <h2 className="text-3xl md:text-5xl text-center font-semibold">
          About me
        </h2>
        <p className="text-center text-white/50 md:text-lg max-w-md mx-auto mt-4">
        A Window Into My World
        </p>
      </div>
      <div className="">
        <Card>
            <div className="">My recent read</div>
            <p>This one taught me that success isn’t out of reach—we just never learned the real-life skills school left out.</p>
            <Image src={bookImage} alt = "Book Image"/>
        </Card>
      </div>
    </div>
  );
};
