import { useState } from "react"
import Navbar from "./modules/Navbar.tsx"
import Post from "./posts/post1.mdx"

function App() {
    const [isOpen, setOpen]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);

    return (
        <div>
            <Navbar isOpen={isOpen} setOpen={setOpen} />
            <div className="mb-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 hidden md:block" />
            
        </div>
    )
}

export default App