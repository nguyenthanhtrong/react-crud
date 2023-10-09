import { useEffect, useState } from "react";
import axios from 'axios';

const { Link } = require("react-router-dom");

function Student() {

    const [student, setStudent] = useState([]);
    const [loading, setloading] = useState(true);
    const [inputErrorList, setinputErrorList] = useState({})
    // const [totalUsers,settotalUsers] = useState(0); // luu bien de lấy sheet
    useEffect(()=>{
        axios.get(`https://localhost:7024/api/Students/paging?page=1`).then(res =>{   

            setStudent(res.data.value.data);
            setloading(false);
            console.log(">>>res",res)
        });
    },[])
     /* delete */

    const deleteStudent = (e, id) =>{
        e.preventDefault();

        const thisClick  = e.currentTarget;
        thisClick.innerText ="Delete .....";

        axios.delete(`https://localhost:7024/api/Students/${id}`)
            .then(res =>{  
                alert("xóa thành công");
                thisClick.closest("tr").remove();
            })
            .catch(function (err) {
                if(err.response){
                   if(err.response.status === 400){
                       setinputErrorList(err.response.data.errors)
                      thisClick.innerText ="Delete";
                   }
                   if(err.response.status === 500){
                       alert(err.response.data)
                       setloading(false)
                   }
                }
           });
    }



    /* delete */
    if(loading){
        return(
            <div>
                Loading....
            </div>
        )
    }
    var StudentDetails = "";
    StudentDetails = student.map((item,index)=>{
        return(
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.gtinh}</td>
                <td>{item.address}</td>
                <td>{item.classId}</td>
                <td>
                    <Link to={`/students/${item.id}`} className="btn btn-success">Edit</Link>
                </td>
                <td>
                    <button type="button" onClick={(e) => deleteStudent(e, item.id)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )    
    })
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Student List 
                                <Link to="/students/create" className="btn btn-primary float-end">Add Student</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Sex</th>
                                        <th>Address</th>
                                        <th>Class_ID</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {StudentDetails}
                                </tbody>
                            </table>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    
    )    
}


export default Student;