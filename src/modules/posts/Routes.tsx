import { Route, Routes as ReactRoutes, BrowserRouter } from "react-router-dom"
import Archives from "../Archives";
import Post1 from "./post1.mdx";
import Post2 from "./post2.mdx";
import Navbar from "../components/Navbar";
import Home from "../Home";
import NoMatch from "../NoMatch";

function Routes() {
    return (
        <div className="w-full">
            <BrowserRouter>
                <ReactRoutes>
                    <Route index element={<Home />} />
                    <Route path="posts">
                        <Route path="post1" element={
                            <div className="w-full">
                                <Navbar />
                                <div className="block pt-6">
                                    <div className="prose dark:prose-invert">
                                        <Post1 />
                                    </div>
                                </div>
                            </div>} />
                        <Route path="post2" element={
                            <div className="w-full">
                                <Navbar />
                                <div className="block pt-6">
                                    <div className="prose dark:prose-invert">
                                        <Post2 />
                                    </div>
                                </div>
                            </div>
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