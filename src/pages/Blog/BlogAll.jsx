import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogAll() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data.posts)
            })
    }, []);

    return (
        <>
        <h1>Trang tin tức</h1>
            <ul>
                {posts.map(item => (
                    <li key={item.id}>
                        <Link to={"/blog/detail/" + item.id}>
                            {item.title}
                        </Link> {/* Dynamic ( Đường dẫn động =>App.jsx )  */}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default BlogAll;