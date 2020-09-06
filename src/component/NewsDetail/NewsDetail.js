import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import Header from '../Header/Header';
import fakeimg from '../fakeImg';




const NewsDetail = () => {
    // const img5 = fakeimg.slice(0,5);
    // const [img,setImg] = useState(img5);
    const { newskey } = useParams();
    const [comment, setComment] = useState([]);
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${newskey}/comments/`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${newskey}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <div className="container-md">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h3 class="display-4">{post.title}</h3><br /><br />
                        <p class="lead">{post.body}</p>
                        <br /> <br /> <br />
                        <h6>Comments:</h6>
                        {/* {img.map(img =><Comments img ={img}></Comments>)} */}
                        {comment.map(comment => <Comments comment={comment}></Comments>)}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NewsDetail;