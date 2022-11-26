import React, { useContext } from 'react';
import './Followed.css';
import Followed from './Followed';
import { SelectedStudents } from '../../context/ThemeColor';


const Following = (props) => {

    const { selectedStudents } = useContext(SelectedStudents);


    const followingList = selectedStudents.map(postId => {
        return <Followed id={postId } key={postId}/>;
    }
    );
    return (
        <div>
            <center><h1>Selected Students</h1> </center>
            {followingList}
        </div>
    );

}

export default Following;