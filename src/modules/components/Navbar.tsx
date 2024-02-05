function Navbar() {
    return (
        <div className="flex justify-between items-center mt-8">
            <a className="flex cursor-pointer font-logo" href="/">
                <h1 className="text-2xl font-black transition-all duration-1000 ease-in-out md:text-4xl md:hover:rotate-180">
                    <span className="logo-gradient">No Shit.</span>
                    <br className="md:hidden" />
                    <sup className="text-lg font-light md:ml-2 md:text-xl">A tech blog</sup>
                </h1>
            </a>
            <div className="flex justify-between w-32">
                <a href="/">Home</a>
                <a href="/posts">Archives</a>
            </div>
        </div>
    )
}

export default Navbar;