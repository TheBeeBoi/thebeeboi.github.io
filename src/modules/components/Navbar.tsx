function Navbar() {
    return (
        <div className="flex justify-between items-center mt-8">
            <a className="flex cursor-pointer font-logo" href="/">
                <h1 className="text-2xl font-black transition-all duration-1000 ease-in-out md:text-4xl md:hover:rotate-180">Logo<br className="md:hidden" /> <sup className="text-lg font-light md:text-xl">Tagline</sup> </h1>
            </a>
            <div className="flex justify-between w-32">
                <a href="/">Home</a>
                <a href="/archives">Archives</a>
            </div>
        </div>
    )
}

export default Navbar;