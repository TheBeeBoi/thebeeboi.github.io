import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './modules/Navbar'

const [isOpen, setOpen]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div>
            <Navbar isOpen={isOpen} setOpen={setOpen} />
            <div className="mb-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 hidden md:block" />
            
        </div>
    </React.StrictMode>,
)