import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login =() => {

    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate();

const  handleSubmit =(e) =>{
        e.preventDefault();

        const config ={
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        axios.post(`https://localhost:7024/api/Users/authenticate`,{
            Username: Username,
            Password: Password,  
        },config)
        .then(response =>{
            setMessage("You're logged in");
            navigate('/students')   // điều hướng
        }).catch(error => {
            console.error(error);
            this.setState({
            errorMessage: 'Something went wrong'
            });
        });        
    }
return(
    <div className="container">
        <form onSubmit={handleSubmit}>
        <h3>Please login.
        <Link to="/students" className="btn btn-danger float-end">
                                    Back
                                </Link>
        </h3>
        {message && <p className="text-success">{message}</p>}
        {errorMessage && <p className="text-error">{errorMessage}</p>}
        <div className="form-group">
            <label htmlFor="Username">Username</label><input type="Username" className="form-control" 
            id="Username" aria-describedby="Username" value={Username} onChange={(event) => setUsername(event.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input type="Password" className="form-control"
            id="Password" value={Password} onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <div className='form-group' style={{marginTop: '2vh'}}>
            <button type="submit" className="btn btn-primary">Login</button>
            &nbsp;
        </div>
        </form>
    </div>  
    )
}
export default Login;