import Logo from "../assets/logo-text.png"

const Navbar = () => {
    return (
        <div className="border-b border-gray-200">
            <nav className="flex justify-between gap-4 max-w-7xl mx-auto py-5">
                <img src={Logo} className="w-[100] h-9" alt="" />

                <ul className="flex gap-4 items-center text-[#475569]">
                    <li><a href="/" className="text-[#DB2777]">Home</a></li>
                    <li><a href="/">Technologics</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>

                <div className="flex gap-4 items-center">
                    <button className="text-[#334155]">Sign In</button>
                    <button className="bg-[#DB2777] rounded-3xl px-4 py-2 text-white">Sign up</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;