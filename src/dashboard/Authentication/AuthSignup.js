import React from 'react';
import { withRouter } from 'react-router-dom';
import { authHttp } from '../../service/fetch';

class AuthSignup extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            surname: "",
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);
        try{
            const response = await authHttp("POST", "singUp", this.state);
            if(response.status === 400){
                alert("The email is not valid");
            }
            else{
                alert("The user has been register success");
                this.props.history.push('/dashboard');
            }
        }
        catch(error){
            console.log(error);
            throw new Error("Has been a error when trying to register a user.")
        }
    }

    render(){
        const {name, surname, email, password} = this.state;
        return( 
        <section className="container text-center content-top">
            <h1>AuthSignup</h1>
            <br/>

            <form onSubmit={this.handleSubmit}>
                
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                        <input type="text" className="form-control" placeholder="First name"
                        name="name" onChange={this.handleChange} value={name}/>
                        </div>
                        <div className="col">
                        <input type="text" className="form-control" placeholder="Last name"
                        name="surname" onChange={this.handleChange} value={surname}/>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <input name="email" type="email" className="form-control" placeholder="Email"
                    aria-describedby="emailHelp" onChange={this.handleChange} value={email}/>
                </div>

                <div className="form-group">
                    <input name="password" type="password" className="form-control" 
                    placeholder="Password" id="password" onChange={this.handleChange} 
                    value={password}/>
                </div>

                <button type="submit" className="btn btn-primary"
                disabled={email === "" || password === "" || name === "" || surname === ""}>
                    Submit
                </button>
            </form>

        </section>
        )
    }
}

export default withRouter(AuthSignup);