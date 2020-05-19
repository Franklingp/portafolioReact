import React from  'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Interceptor extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isAuth: false
        }
    }

    componentDidMount(){
        this.setState({
            isAuth: this.props.auth.isAuth
        }, () => {
            if(this.state.isAuth === false){
                alert("Debe iniciar sesion para poder continuar");
                this.props.history.push('/dashboard/login');
            }
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.auth.isAuth === false){
            this.props.history.push('/dashboard/login');
        }
    }

    render(){
        return(
            <section>
               {this.props.children}
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps)(withRouter(Interceptor));