import Logo from '../assets/logo-text.png';

const Navbar = () => {
    return (
        <nav className="border-b border-gray-300 ">
            <div className="font-inter flex justify-between p-4 container mx-auto">
                <img src={Logo} alt="Logo" />

                <ul className="flex gap-5">
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div className="flex gap-2">
                    <button>Sign In</button>
                    <button className="bg-[#d91b7e] hover:bg-[#d91b7e] text-white rounded-full pl-4 pr-4">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;