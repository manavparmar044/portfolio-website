import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge"

export const Card = ({className,children} : 
    PropsWithChildren<{className?: string}>) => {
  return (
    <div className={twMerge("bg-gray-900 rounded-3xl relative z-0 after:z-10 after:content-[''] overflow-hidden after:absolute after:inset-0 after:border-2 after:border-offset-2 after:rounded-3xl after:border-white/20 after:pointer-events-none ;p-6",className)}>{children}</div>
  );
};

//pl-8 pr-8 pt-8  md:pt-12 md:px-10 lg:pt-16 lg:px-20 
