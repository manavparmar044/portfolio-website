"use client"

import xsellrator from "../assets/images/Xsellrator_grey.png"
import xsellrate from "../assets/images/Xsellrate_grey.png"
import laya from "../assets/images/laya_grey.png"
import thePines from "../assets/images/Thepines_grey.png"
import royalPalms from "../assets/images/royalpalms_grey.png"
import lookin from "../assets/images/lookin_grey.png"
import Image from "next/image"

const brandLogos = [
    { src: xsellrator, alt: "Xsellrator Logo" },
    { src: lookin, alt: "Lookin Logo" },
    { src: royalPalms, alt: "Royal Palms Logo" },
    { src: laya, alt: "Laya Logo" },
    { src: thePines, alt: "The Pines Logo" },
    { src: xsellrate, alt: "Xsellrate Logo" },
  ];

export const LogoScroll = () => {
    return (
        <div className="bg-black text-white py-[72px] sm:py-24">
            <div className="container">
                <h2 className="text-xl text-center text-white/70">Brands I have worked with</h2>
                <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:absolute after:absolute before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
                    <div className="flex gap-[7.5rem]">
                    {brandLogos.map(({src,alt})=>(
                        <Image src = {src} alt = {alt} key = {alt} className="flex-none w-auto h-16"/>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}