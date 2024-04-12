import React, { useState, useEffect } from 'react';

const getData = async (url) => {
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (error) {
        throw new Error(error);
    }
};

function PostItem({id,title,body}){
    return <div>
         <p>{id}=={title}</p>
         <p>{body}</p>
        </div>
}

function FetchData() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [err, setErr] = useState(false);

    const fetchAndUpdateData = async () => {
        setLoading(true);
        try {
            let data = await getData(
                `https://jsonplaceholder.typicode.com/posts?_limit=10`
            );
            setPosts(data);
            setLoading(false);
        } catch (error) {
            setErr(true);
            setLoading(false);
        }
    };       
   useEffect(() => {
        fetchAndUpdateData();
    },[]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (err) {
        return <h1>Something went wrong.. please refresh</h1>;
    }
    console.log("render")
    return (
        <>
            <h1>API Data</h1>
            {posts.map((post) => (
                <PostItem key={post.id} id={post.id} title={post.title} body={post.body}/>
            ))}
        </>
    );
}
    
export default FetchData;
