import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./modules/Home";
import Archives from "./modules/Archives";
import MDPostRender from "./modules/MDPostRender";
import data from './modules/posts/list'

function App() {
    function generateRoutes() {
        return data.map((post: any) => {
            return <Route
                path={post.link}
                element={< MDPostRender data={post.link} />}
                key={post.id}
            />
        });
    };

    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="archives" element={<Archives />} />
                <Route path="posts">
                    {generateRoutes()}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;