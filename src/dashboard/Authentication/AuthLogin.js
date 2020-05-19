import React from 'react';
import { withRouter } from 'react-router-dom';
import { logingUser } from '../../redux/actions/authActions';
import { connect } from 'react-redux';

class AuthLogin extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email:"",
            password: ""
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.auth.isAuth === true){
            this.props.history.push("/dashboard");
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.logingUser(this.state);
    }

    render(){
        let {email, password} = this.state;
        return(
            <section className="container text-center content-top">
                <h1>AuthLogin</h1>
                <p>Do you need to authenticate before continue...</p>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input name="email" type="email" className="form-control" id="email" 
                        aria-describedby="emailHelp" onChange={this.handleChange} value={email}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" className="form-control" 
                        id="password" onChange={this.handleChange} value={password}/>
                    </div>
                    <button type="submit" className="btn btn-primary"
                    disabled={email === "" || password === ""}>Submit</button>
                </form>
            </section>
        )
    }
}
const mapDispatchToProps = {
    logingUser
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthLogin));