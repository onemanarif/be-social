import React from 'react';
import img from './img7.jpg';
import './Comment.css';
const Comments = (props) => {
    console.log(props.comment);
    return (
        <div>
            <ul class="list-group">
                <li class="list-group-item">
                    <div class="d-flex flex-row bd-highlight mb-3 justify-content-start">
                        <div class="p-2 bd-highlight d-flex justify-content- mt-15">
                            <img className="imgStyle" src={img} alt="" />
                        </div>
                        <div class="p-2 bd-highlight">
                            <h5><b>{props.comment.title}</b></h5>
                            <p>{props.comment.body}</p>
                            <h6><strong>{props.comment.email}</strong></h6>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Comments;