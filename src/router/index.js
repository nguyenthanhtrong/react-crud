import { Route, Routes } from "react-router-dom";
import StudentList from 'pages/Student'
import StudentCreate from "pages/StudentCreate.js";
import StudentEdit from "pages/StudentEdit.js";
import RegisterForm from "_components/RegisterForm.js";
import Login from "_components/Login.js";

function MyRouter() {
    return(
        <Routes>
            <Route path="/students" element={<StudentList />}/>
            <Route path="/students/create" element={<StudentCreate />}/>
            <Route path="/students/:id" element={<StudentEdit />}/>        
            <Route path="/register" element={<RegisterForm />}/>
            <Route path="/Login" element={<Login />}/>
        </Routes>
    )
}
export default MyRouter;