import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import NewsFeed from '../NewsFeed/NewsFeed';

const Home = () => {
    const [posts,setPosts] = useState([]);
    useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
    return (
        <div>
            <Header></Header>
            {
              posts.map(posts => <NewsFeed posts = {posts}></NewsFeed>)
            }
            
        </div>
    );
};

export default Home;