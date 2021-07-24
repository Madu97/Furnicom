import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/getit')
            .then(res => {
                console.log(res);
                this.setState({ persons: res.data });
            });
    }

    render() {
        return (
            <div>
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">IC</th>
                            <th scope="col">Phone No</th>
                            <th scope="col">Email</th>
                            <th scope="col">Username</th>
                            <th scope="col">Password</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>

                    {this.state.persons.map(person =>


                        <tr>
                            <th scope="row">{person.id}</th>
                            <td>{person.firstname}</td>
                            <td>{person.lastname}</td>
                            <td>{person.gender}</td>
                            <td>{person.ic_no}</td>
                            <td>{person.phone_no}</td>
                            <td>{person.email}</td>
                            <td>{person.username}</td>
                            <td>{person.password}</td>
                            <td>{person.address}</td>
                        </tr>
                    )}
                      </tbody>

                </table>


            </div>
        );

    }
}