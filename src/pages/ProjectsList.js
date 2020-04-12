import React from 'react';

class ProyectList extends React.Component {
    constructor(props){
        super(props);

        this.state = { 
            projects: []
        }
    }

    // componentDidMount(){

    // }

    render(){
        return(
            <h1>ProyectList</h1>
        );
    }
}

export default ProyectList;