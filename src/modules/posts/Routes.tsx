import { Route, Routes as ReactRoutes, BrowserRouter } from "react-router-dom"
import Archives from "../Archives";
import Post1 from "./post1.mdx";
import Post2 from "./post2.mdx";
import Navbar from "../components/Navbar";
import Home from "../Home";
import NoMatch from "../NoMatch";

function Routes() {
    return (
        <div className="w-full min-h-[calc(100dvh-120px)]">
            <BrowserRouter>
                <ReactRoutes>
                    <Route index element={<Home />} />
                    <Route path="posts">
                        <Route path="post1" element={
                            <Post1 />
                        } />
                        <Route path="post2" element={
                            <Post2 />
                        } />
                        <Route index element={<Archives />} />
                    </Route>
                    <Route path="*" element={<NoMatch />} />
                </ReactRoutes>
            </BrowserRouter>
        </div>
    )
}

export default Routes;