import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './Followed.css';
import { SelectedStudents } from '../../context/ThemeColor';
import { useNavigate } from 'react-router';

const Followed = (props) => {



    const { selectedStudents, setSelectedStudents } = useContext(SelectedStudents);


    const [postCall, setPostCall] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios('http://localhost:8080/api/v1/students/' + props.id)
            .then(response => {
                setPostCall(response.data);
            })
    }, [props]);



    const unfollowPostHandler = () => {
        let removedPost = selectedStudents;
        removedPost.splice(removedPost.indexOf(props.id), 1);
        setSelectedStudents(removedPost);
        navigate("/stu")

    };

    let post = <p style={{ justifyContent: 'space-around' }}> Please select a Student!</p>;
    if (props.id != null) {
        post = (
            <div className="Followed">
                <h1>{postCall.id}</h1>
                <p>{postCall.name}</p>
                <div className="Edit">
                    <button onClick={unfollowPostHandler} className="Delete">Unselect</button>
                </div>
            </div>
        );
    }


    return post;
}

export default Followed;
