import {allposts} from "../serverfuncs.js";
import Post from "./post.jsx";
import { useState,useEffect } from "react";

function AllPosts({setId}){
    // const [posts, setPosts] = useState([]);

    // useEffect(()=>{
    //     allposts().then(result => setPosts(result));
    // }, []);
    // console.log(posts);

return (
    <div class="grid-cols-1 sm:grid md:grid-cols-4 ">
        {/* {
            posts.map((posts) => 
                <Post setId={setId} setPageToShow={setPageToShow} id={posts.id} user={posts.user} title={posts.title} recorded={posts.recorded} url={posts.url} article={posts.article}></Post>
            )
        } */}
        
    </div>
    )
}

export default AllPosts;