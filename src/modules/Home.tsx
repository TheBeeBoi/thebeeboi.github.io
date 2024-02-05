import Navbar from "./components/Navbar";
import Couch from "../assets/couch.webp"

function Home() {
    return (
        <div className="w-full">
            <Navbar />
            <div className="block md:flex max-w-[300px] sm:max-w-[400px] md:max-w-[640px] lg:max-w-[980px] xl:max-w-[1200px] mx-auto items-center py-10 h-full">
                <img id="couch" src={Couch} alt="Woah! It's a couch." className="mx-auto dark:invert-[0.935] invert-[0.05]" />
                <div aria-label="Container div for logo" className="block mx-auto text-xl text-center sm:ml-10 md:ml-20 md:text-left lg:text-2xl">
                    <h1 className="mb-8 text-6xl font-black font-logo lg:text-8xl w-fit logo-gradient">No Shit.</h1>
                    <p>Ever had a stupid question that you didn't find an answer to?</p>
                    <p>Ever had a Google search <br className="md:hidden" /> with <i>0 search results</i>?</p>
                    <p>Ever had to <b>center a div</b>?</p>
                    <p>Well, I'm help with that.</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Home;