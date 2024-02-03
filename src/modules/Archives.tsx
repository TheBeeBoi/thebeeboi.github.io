import Navbar from "./components/Navbar";
import posts from "./posts/list";
import Card from "./components/Card";

interface Post {
    title: string;
    description: string;
    tags: string[];
    link: string;
    id: number;
}

function Archives() {
    function generateCards(data : Post[]) {
        return data.map((post : Post) => (
            <Card
                key={post.id}
                title={post.title}
                description={post.description}
                tags={post.tags}
                link={post.link}
            />
        ));
    };

    return (
        <div className="w-full">
            <Navbar />
            <div className="flex mt-6">
                {generateCards(posts)}
            </div>
        </div>
    )
}

export default Archives;