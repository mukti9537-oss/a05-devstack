import Logo from "../assets/logo-text.png"
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
    return (
        <div className="border-b border-gray-200 sticky top-0 z-50 bg-white">
            {/* mobile navbar */}

            <nav className="flex md:hidden justify-between gap-4 max-w-7xl mx-auto py-5">

                <button className=" text-2xl cursor-pointer">
                    <GiHamburgerMenu />

                </button>
                <img src={Logo} className="w-[100] h-9" alt="" />


                <div className="flex gap-2">
                    <button className="text-[#334155] text-sm">Sign In</button>

                    <button className="bg-[#DB2777] rounded-3xl px-4 py-2 text-white text-sm">Sign up</button>

                </div>
            </nav>

            {/* desktop navbar */}

            <nav className="hidden md:flex justify-between gap-4 max-w-7xl mx-auto py-5">
                <img src={Logo} className="w-[100] h-9" alt="" />


                <ul className="flex gap-4 items-center text-[#475569]">

                    <li className="active:scale-90 transition-transform"><a href="/" className="text-[#DB2777]">Home</a></li>

                    <li className="active:scale-90 transition-transform"><a href="/" >Technologics</a></li>

                    <li className="active:scale-90 transition-transform"><a href="/">Projects</a></li>

                    <li className="active:scale-90 transition-transform"><a href="/">About</a></li>

                    <li className="active:scale-90 transition-transform"><a href="/" >Contact</a></li>
                </ul>

                <div className="flex gap-4 items-center">
                    <button className="text-[#334155] active:scale-90 transition-transform cursor-pointer">Sign In</button>

                    <button className="bg-[#DB2777] rounded-3xl px-4 py-2 text-white 
                    hover:scale-110 active:scale-90 transition-transform cursor-pointer">Sign up</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;