import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

class RegisterFrom extends Component {
    constructor(props){
        super(props);

        this.state ={
            FirstName:'',
            LastName:'',
            Username:'',
            Password:'',
            message: '',
            errorMessage: ''
        };  
    }
    handleSubmit =(event) =>{
        event.preventDefault();

        axios.post(`https://localhost:7024/api/Users/register`,{
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Username: this.state.Username,
            Password: this.state.Password,          
        })
        .then(response =>{
            this.setState({
                message: 'Account registered.'
            });
        }).catch(error => {
            console.error(error);
            this.setState({
              errorMessage: 'Something went wrong'
            });
          });        
    }


    render(){
        return(
            <div className="container">
                {/* <Menu /> */}
                
                <form onSubmit={this.handleSubmit}>             
                        {this.state.message && <p className="text-success">{this.state.message}</p>}
                        {this.state.errorMessage && <p className="text-error">{this.state.errorMessage}</p>}
                        <Link to="/students" className="btn btn-danger float-end">
                                    Back
                                </Link>
                        <div className="form-group">
                            <label htmlFor="name">FirstName</label>
                            <input type="text" className="form-control" id="FirstName" value={this.state.FirstName} onChange={event => this.setState({ FirstName: event.target.value })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="LastName">LastName</label>
                            <input type="text" className="form-control" id="LastName" value={this.state.LastName} onChange={event => this.setState({ LastName: event.target.value })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Username">Username</label>
                            <input type="text" className="form-control" id="Username" value={this.state.Username} onChange={event => this.setState({ Username: event.target.value })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password">Password</label>
                            <input type="password" className="form-control" id="Password" value={this.state.Password} onChange={event => this.setState({ Password: event.target.value })} />
                        </div>
                        <button type="submit" className="btn btn-primary">Register
                        </button>
                          
                </form>
            </div>
                )
    }
}
export default RegisterFrom;