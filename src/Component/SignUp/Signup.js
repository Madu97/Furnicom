import React, { Component } from 'react'
import '../../Assets/CSS/signup.css'

class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            address: "",
            id: "",
            phone: "",
            email: "",
            username: "",
            password: "",
            retypepassword: "",
            gender: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    addresshandler = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    idhandler = (event) => {
        this.setState({
            id: event.target.value
        })
    }
    phonehandler = (event) => {
        this.setState({
            phone: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
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
    retypepasswordhandler = (event) => {
        this.setState({
            retypepassword: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            address: "",
            id: "",
            phone: "",
            email: "",
            username: "",
            password: '',
            retypepassword: '',
            gender: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div className="signup d-flex justify-content-center">
                <div className="row  ">
                    <div className="col-log-3"></div>
                    <div className="col-log-6">
                        <div className="ui">
                        <form onSubmit={this.handleSubmit}>
                            <h1>User Registration</h1>
                            <div className="row">
                                <div className="col-lg-6">
                                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                                </div>
                                <div className="col-lg-6">
                                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                                </div>
                            </div>
                            <label>Address :</label> <input type="text" value={this.state.address} onChange={this.addresshandler} placeholder="Address..." /><br />
                            <label>Id Number :</label> <input type="text" value={this.state.id} onChange={this.idhandler} placeholder="Id Number..." /><br />
                            <label>Phone No :</label> <input type="text" value={this.state.phone} onChange={this.phonehandler} placeholder="Phone No..." /><br />
                            <label>Email :</label> <input type="text" value={this.state.email} onChange={this.emailhandler} placeholder="Email..." /><br />
                            <label>Username :</label> <input type="text" value={this.state.username} onChange={this.usernamehandler} placeholder="Username..." /><br />
                            <div className="row">
                                <div className="col-lg-6">
                                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                                </div>
                                <div className="col-lg-6">
                                    <label>Re-type Password :</label> <input type="password" value={this.state.retypepassword} onChange={this.retypepasswordhandler} placeholder="Password..." /><br />
                                </div>
                            </div>
                            <label>Gender :</label><select onChange={this.genderhandler} defaultValue="Select Gender">
                                <option defaultValue>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select><br />
                            <input type="submit" value="Submit" class="btn btn-primary btn-lg " />
                        </form>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
            
        )
    }
}

export default Signup