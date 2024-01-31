import { Squash as Hamburger } from 'hamburger-react'
import Sidebar from "./Sidebar.tsx"

interface NavbarProps {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar(props: NavbarProps) {
    const { isOpen, setOpen } = props;
    function toggle() {
        console.log(setOpen)
        setOpen(!isOpen);
    }
    return (
        <div>
            <Sidebar isOpen={isOpen} />
            <div className="flex justify-between items-center px-10 w-full h-24">
                <div className="flex hover:animate-pulse">
                    <h1 className="font-heading font-black text-[2rem]">No Shit.</h1>
                    <h5 className="ml-1">a tech blog</h5>
                </div>
                <div className="hidden justify-between w-32 md:flex">
                    <a href="/">Home</a>
                    <a href="/">Archives</a>
                </div>
                <div className="md:hidden">
                    <Hamburger toggled={isOpen} onToggle={toggle} rounded />
                </div>
            </div>
        </div>
    )
}

export default Navbar