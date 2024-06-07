/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BtnGoBack from "../../components/BtnGoBack/BtnGoBack";

function BlogDetail() {

    const param = useParams();

    const [post, setPost] = useState();

    // console.log("Param id : " , param);

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${param.id}`)
            .then(res => res.json())
            .then(data => {
                setPost(data)
            })
    }, []);

    console.log(post);

    return (
        <>
            Page Blog Detail <br/>
            <BtnGoBack/>
            {post && (

                <>
                    <h1>{post.title}</h1>
                    <div>
                        {post.body} <br />
                        Like : {post.reactions.likes} <br />
                        Dislikes : {post.reactions.dislikes} <br />
                        Views : {post.views} <br />
                        Tag :
                        {post.tags.map((item, index) => (
                            <span key={index}>
                                <Link>{item}</Link>
                            </span>
                        ))}
                    </div>
                </>
            )}
        </>
    )
}

export default BlogDetail;