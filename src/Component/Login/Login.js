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
                        <div className="inputBx">
                            <input type="submit" value="Sign in" name="" />
                        </div>
                        <div className="inputBx">
                            <p>Don't have an account? <a href="">Sign up</a></p>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}

export default Login