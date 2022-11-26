import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router";
import './NewProduct.css';

const NewProductHook = (props) => {

    const newProductForm = useRef();

    const navigate = useNavigate();

    const StudentHandler = (e) => {
        e.preventDefault();
        const form = newProductForm.current;
        const data = {
            name: form['name'].value,
            gpa: form['price'].value
        };
        console.log(data);
        axios.post('http://localhost:8080/api/v1/students', data)
            .then(data => {
                navigate('/students');
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }

    return (
        <div className="NewProduct">

            <form ref={newProductForm} onSubmit={StudentHandler}>
                <h1>Add a Student</h1>

                <label>Name</label>
                <input type="text"
                    label={'name'}
                    name={'name'}
                />

                <label>GPA</label>
                <input type="text"
                    label={'price'}
                    name={'price'}
                />
                <button>Add Student </button>
            </form>

        </div>
    );

}

export default NewProductHook;