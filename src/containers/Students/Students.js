import Student from "../../components/Student/Student"
import { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import StudentDetails from "../../components/StudentDetails/StudentDetails";
import { Link } from "react-router-dom";

const Students = (props) => {


    const dropdown = useRef();
    const inputParam = useRef();

    const [flag, setFlag] = useState(false);

    const [productsState, setProductsState] = useState(
        [
            { id: 1, name: "Zaineh", gpa: 3.7 },
            { id: 2, name: "Moe", gpa: 3.6 },

        ]
    );


    const filterHandler = () => {
        setFlag(!flag)
        console.log(dropdown.current.value);
        console.log(inputParam.current.value);

    }

    const fetchProducts = () => {

        axios.get('http://localhost:8080/api/v1/students', {
            params: {
                filter: dropdown.current.value,
                input: inputParam.current.value
            }
        })
            .then(response => {
                setProductsState(response.data);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        fetchProducts()
    },
        [flag])




    const products = productsState.map(product => {
        return (

            <Link to={`${product.id}`} key={product.id} >
                <Student
                    name={product.name}
                    gpa={product.gpa}
                    id={product.id}
                />
            </Link>


        )
    });
    
    return <div className="Product">
        <div className="Product">
            <label>Filter: </label>
            <select ref={dropdown}>
                <option value="0">N/A</option>
                <option value="gpa">&lt; gpa</option>
                <option value="program">program</option>
            </select>

            <label>&nbsp;&nbsp;&nbsp;Input: </label>
            <input ref={inputParam} type="text"
                label={'input'}
                name={'input'}
            />

            <button onClick={filterHandler} > Apply Filter</button>
        </div>

        <br />
        {products}
        <StudentDetails />
    </div>;

}

export default Students;