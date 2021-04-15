import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header'

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            counter : 0,
            users : [],
            header: true
        }
       console.log("je suis dans le constructeur");
    }

    componentDidMount() {
        console.log("componentDidMount");
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response);
            this.setState({users: response.data})
        })
        .catch(error => {
            console.log(error);
        })
    }

    clic = () => {
        this.setState({header: !this.state.header})
    }
    
    render() {
        console.log("je suis dans le rendu");
        return (
            <div>
                {
                    this.state.header && <Header/> 
                }
                

                <h1>Je suis le dom</h1>
                <ul>
                {

                    this.state.users.map(user => <li key={user.id}>{user.name}</li> )
                }
                </ul>
                <button onClick={this.clic}>Delete header</button>
             {console.log("le dom rendu ")}
            </div>
           
        )
    }
}
