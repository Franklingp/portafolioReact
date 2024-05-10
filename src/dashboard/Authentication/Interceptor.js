import React from  'react';
import {useState, useEffect} from  'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

// const Interceptor = ({children, auth}) => {
//     const isAuth = useState(false);
//     const navigate = useNavigate();

//     useEffect(() =>{
//         if(auth.isAuth == false){
//             alert("Debe iniciar sesion para poder continuar");
//             navigate("/");
//         }
//     },[isAuth])

//     return(
//         <section>
//             {children}
//         </section>
//     )
// }

// const mapStateToProps = (state) => ({
//     auth: state.auth
// })

// export default connect(mapStateToProps)(Interceptor);


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