import React from 'react';
import { connect } from 'react-redux';
import { getAllMessage, changeRead, deleteMessage } from '../redux/actions/contactActions';

class DashboardComments extends React.Component {
    componentDidMount() {
        this.props.getAllMessage();
    }

    handleDelete = (id, name) => {
        const check = window.confirm(`Seguro que desea eliminar el mensaje de ${name}?`);
        if (check) {
            this.props.deleteMessage(id);
        }
    }

    render() {
        console.log(this.props);
        const props = this.props
        return (
            <section>
                <h2> Comentarios </h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Message</th>
                            <th scope="col">Date</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.messages.map(message => {
                                return (
                                    <tr key={message._id} className={message.read ? 'text-muted' : ""}>
                                        <td>{message.name}</td>
                                        <td>{message.email}</td>
                                        <td>{message.message}</td>
                                        <td>{message.date}</td>
                                        <td>
                                            <input type="checkbox" value={true}
                                                checked={message.read}
                                                onChange={() => { this.props.changeRead(message._id) }} />
                                            <button type="button"
                                                className="btn btn-danger"
                                                onClick={() => this.handleDelete(message._id, message.name)}>
                                                X
                                        </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {
                    props.messages.length === 0 &&
                    <div className="alert alert-warning" role="alert">
                        No hay mensajes.
                </div>
                }
            </section>
        )
    }
}

const mapStateToProps = state => ({
    messages: state.messages
})

const mapDispatchToProps = {
    getAllMessage,
    changeRead,
    deleteMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComments);