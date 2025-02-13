import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <div className="bg-black">
        <div className="px-4">
      <div className="py-4 flex items-center justify-between">
        <div className="bg-white h-12 w-12 rounded-md"></div>
        <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
          <MenuIcon className="text-white" />
        </div>
        <nav className="gap-6 transition hidden sm:flex">
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Home</a>
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Projects</a>
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">About</a>
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Contact</a>
        </nav>
      </div>
    </div>
    </div>
  );
};
