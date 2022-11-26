import axios from "axios";
import { useEffect, useState, Fragment, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import Course from "../Course/Course";
import './StudentDetails.css';
import { SelectedStudents } from "../../context/ThemeColor";

const StudentDetails = (props) => {

    const params = useParams();
    const navigate = useNavigate();

    const [studentDetail, setStudentDetail] = useState({});
    const { selectedStudents, setSelectedStudents } = useContext(SelectedStudents);

    console.log(selectedStudents.includes(params.id));
    console.log(params.id)
    console.log(selectedStudents)

    useEffect(
        () => {
            console.log(params.id)
            if (params.id) {
                axios.get('http://localhost:8080/api/v1/students/' + params.id)
                    .then(response => {
                        setStudentDetail(response.data)
                    })
                    .catch(err => console.log(err.message))
            }
        }, [params.id])

    const deleteButtonClicked = (id) => {
        axios.delete('http://localhost:8080/api/v1/students/' + id)
            .then(response => {
                // fetchProducts();
                navigate('/')
            })
            .catch(err => {
                console.error(err);
            })
    }


    const space = <Fragment>&nbsp;&nbsp;</Fragment>;

    let productDetailsDisplay = null;
    if (params.id) {

        productDetailsDisplay = (
            <div className="ProductDetail">
                <div >
                    <div>
                        <h3> Student Info </h3>
                    </div>
                    Name: {studentDetail.name}<br/>
                    ID: {studentDetail.id}
                    <div >
                        GPA: {studentDetail.gpa}
                        <br />

                        <div style={{ textAlign: "left" }}>
                            {space} {studentDetail.courseList == null ? "Term status: inactive" : "Courses"} <br />
                            {studentDetail.courseList != null ? studentDetail.courseList.map(course => {
                                return <Course cId={course.id} key={course.id} cName={course.name} />
                            }) : null}
                        </div>
                    </div>


                </div>

                <button onClick={() => { deleteButtonClicked(params.id) }}> Delete </button>

                <br />
                <br />
                <div>
                {
                selectedStudents.includes(params.id)
                    ?
                    <button onClick={() => {
                        let removedPost = selectedStudents;
                        removedPost.splice(removedPost.indexOf(params.id), 1);
                        setSelectedStudents([...removedPost]);
                    }}>
                        Unselect </button>
                    :
                    <button onClick={() => { 
                        setSelectedStudents([...selectedStudents, params.id]);
                    }}>
                        Select </button>}
                </div>
                <div className="Spec" >
                    <button onClick={() => { navigate("/students"); }}> Back</button>
                </div>
            </div>

        );
    }

    return productDetailsDisplay



}

export default StudentDetails;