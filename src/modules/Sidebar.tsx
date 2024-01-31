interface SidebarProps {
    isOpen: boolean;
}

function Sidebar(props: SidebarProps) {
    const isOpen = props.isOpen;
    if (isOpen) return (
        <div className="fixed top-0 left-0 bg-darker h-full w-[280px] md:hidden">
            <div className="flex w-full hover:animate-pulse">
                <h1 className="font-heading font-black text-[2rem]">No Shit.</h1>
                <h5 className="ml-1">a tech blog</h5>
            </div>
        </div>
    )
    return (
        <div className="fixed top-0 left-0 bg-darker h-full w-[280px] hidden">
            <div className="flex w-full hover:animate-pulse">
                <h1 className="font-heading font-black text-[2rem]">No Shit.</h1>
                <h5 className="ml-1">a tech blog</h5>
            </div>
        </div>
    )
}

export default Sidebar