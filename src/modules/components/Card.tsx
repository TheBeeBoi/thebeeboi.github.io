import { Link } from "react-router-dom";

interface CardProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
}

function Card({ title, description, tags, link }: CardProps) {
    return (
        <Link className="overflow-hidden max-w-sm rounded shadow-xl dark:bg-[#212121] bg-[#eeeeee] m-4 flex sm:block" to={'/posts/' + link}>
            <div className="px-6 py-4">
                <h2 className="mb-2 text-xl font-bold">{title}</h2>
                <p className="text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="inline-block px-3 py-1 mr-2 mb-2 text-sm font-semibold text-gray-700 rounded-full shadow-inner bg-[#ddd] dark:bg-dark dark:text-white"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </Link>
    );
};

export default Card;