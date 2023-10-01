import React from "react";

// State and setStan in React
class Employee extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "Polat", lastName: "Alemdar", email: "pl@outlook.com"
        }
    }

    updateEmployee() {
        this.setState({
            firstName: "Aslan", lastName: "Akbey", email: "ak@mit.com"
        })

    }

    render() {
        return (<div>
            <h1> Employee Details</h1>
            <p>{this.state.firstName}</p>
            <p>{this.state.lastName}</p>
            <p>{this.state.email}</p>
            <button onClick={() => this.updateEmployee()}> Update Employee </button>
        </div>)
    }
}

export default Employee