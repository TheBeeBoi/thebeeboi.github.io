import Navbar from "./components/Navbar";

function Home() {
    return (
        <div className="w-full">
            <Navbar />
            <div className="block">
                <hr className="my-6" />
                <h1 className="mb-6 text-xl font-bold md:text-2xl">Recent Posts</h1>
            </div>
        </div>
    )
}

export default Home;