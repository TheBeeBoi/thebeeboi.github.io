import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="flex justify-between items-center mt-8 select-none">
            <Link className="flex cursor-pointer font-logo" to="/">
                <h1 className="z-10 text-2xl font-black transition-all duration-1000 ease-in-out md:text-4xl md:hover:rotate-180">
                    <span className="logo-gradient">No Shit.</span>
                    <br className="md:hidden" />
                    <sup className="text-lg font-light md:ml-2 md:text-xl">A tech blog</sup>
                </h1>
            </Link>
            <div className="flex justify-between w-32">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/posts" className="hover:underline">Archives</Link>
            </div>
        </div>
    )
}

export default Navbar;