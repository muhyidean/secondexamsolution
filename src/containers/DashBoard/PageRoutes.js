import { Route, Routes, Navigate } from "react-router";
import NewProduct from "../../components/NewProduct/NewProduct";
import StudentDetails from "../../components/StudentDetails/StudentDetails";
import Following from "../Followed/Following";
import Students from "../Students/Students";


export default function PageRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/students" />} />
            <Route path="students" element={<Students />} />
            <Route path="students/:id" element={<StudentDetails />} />
            <Route path="add-student" element={<NewProduct />} />
            <Route path="/stu" element={<Navigate replace to="/selected-students" />} />
            <Route path="selected-students" element={<Following /> } />

        </Routes>
    );
}


{/* <Routes>
<Route path="products" element={<Products />}>
    <Route path=":id" element={<ProductDetails />} />
</Route>

<Route path="create-product" element={<NewProductHook />} />
</Routes> */}


