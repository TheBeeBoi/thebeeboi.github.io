import Routes from "./modules/posts/Routes"


function App() {
    return (
        <div className="w-full">
            <Routes />
            <div className="flex absolute left-0 justify-between px-12 py-8 w-screen text-center text-white bg-black">
                <div>
                    Copyright <a href="https://github.com/TheBeeBoi" className="underline">TheBeeBoi</a><sup>&#169;</sup> 2024
                </div>
                <div>Source code located <a href="https://github.com/TheBeeBoi/thebeeboi.github.io" className="underline">here</a></div>
            </div>
        </div>
    );
}

export default App;