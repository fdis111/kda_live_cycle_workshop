import React, { Component } from 'react'
 
export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {}
       console.log("je suis dans le constructeur du header");
    }
    componentDidMount() {
        console.log("je suis dans le componentDidMount du header");
    }
    componentWillUnmount() {
        console.log("je suis mort");
    }
    render() {
        console.log("je suis dans le render du header");
        return (
            <div>
                <h1>header</h1>
                {console.log("je suis le dom du header")}
            </div>   
        )
    }
}

