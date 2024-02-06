import Navbar from "./components/Navbar";
import posts from "./posts/list";
import Card from "./components/Card";

interface Post {
    title: string;
    description: string;
    tags: string[];
    link: string;
}

function Archives() {
    function generateCards(data: Post[]) {
        return data.map((post: Post, index) => (
            <div key={index} className="select-none">
                <Card
                    key={index}
                    title={post.title}
                    description={post.description}
                    tags={post.tags}
                    link={post.link}
                />
            </div>
        ));
    };

    return (
        <div className="w-full">
            <Navbar />
            <div className="block mt-6">
                {generateCards(posts)}
            </div>
        </div>
    )
}

export default Archives;