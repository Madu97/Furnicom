import React, { Component } from 'react'
import '../../Assets/CSS/login.css';
import '../../Assets/Images/furni.jpg'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

<<<<<<< HEAD
    const logininfo = (data) => {
        console.log(data);
        Axios.post('http://localhost:3001/login', {
            username: data.username,
            password: data.password,
        }).then((response) => {
                console.log(response);
            if(response.data.message){
                setLoginStatus(response.data.message)
            }
            else{
                //setLoginStatus(response.data[0].username)
                //window.location.href = "/customer/dashboard";
                //alert(response.data[0].userrole);
                if(response.data[0].userrole == 'customer'){
                    window.location.href = "/customer/dashboard";  
                }
                else if(response.data[0].userrole == 'supplier'){
                    window.location.href = "/supplier/dashboard";
                }
                else if(response.data[0].userrole == 'admin'){
                    //window.location.href = "/admin/dashboard";
                    alert('j');
                }
                else if(response.data[0].userrole == 'deliveryman'){
                    window.location.href = "/delivery/dashboard";
                }
            }
                //console.log(response);
=======
    usernamehandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            username: "",
            password: '',
>>>>>>> db0a97c3a19db93eadbf12b0e6259a8168e6da58
        })
        event.preventDefault()
    }

    render() {
        return (
            /*<div className="aaa" >
                <img src="furni.jpg" /> 
            </div>*/
            <div className="contentBx ">
                <div className="formBx">
                    <h2>Login</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="inputBx">
                            <label>Username :</label> <input type="text" value={this.state.username} onChange={this.usernamehandler} placeholder="Username..." /><br />
                        </div>
                        <div className="inputBx">
                            <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                        </div>
                        <div className="remember">
                            <label>Remember me </label> <input type="checkbox" />
                        </div>
<<<<<<< HEAD
                        <div className="d-flex justify-content-center">
                            <button type="submit" class="btn w-50 btn-lg btn-primary">Log In</button>
                            </div>
                        <div className="inputBx d-flex justify-content-center p-2">
=======
                        <div className="inputBx">
                            <input type="submit" value="Sign in" name="" />
                        </div>
                        <div className="inputBx">
>>>>>>> db0a97c3a19db93eadbf12b0e6259a8168e6da58
                            <p>Don't have an account? <a href="">Sign up</a></p>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}

export default Login