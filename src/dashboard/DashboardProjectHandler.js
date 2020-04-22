import React from 'react';

class  ProjectHandler extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            project: {
                name: "",
                category: "",
                description: "",
                url: "",
                git: ""
            },
            isvalid: {
                name: "",
                category: "",
                description: "",
                url: "",
                git: ""
            }
        }

        this.target = React.createRef();
    }

    handleChange = (e) => {
        console.log(this.target);
        console.log(this.target.current);
        const newProject = this.state.project;
        newProject[e.target.name] = e.target.value;
        this.setState({
            project: newProject
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleValid = (e) => {
        console.log(e);
        console.log(e.target);
    }

    render(){
        const {name, category, description, url, git} = this.state.project;
        return(
            <section className='container text-center' style={{paddingTop: '48px'}}>
                <h1>Project Handler</h1>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input name="name" placeholder="Name" value={name} 
                        onChange={this.handleChange} ref={this.target}
                        onBlur={this.handleValid} 
                        className="form-control" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <input name="category" placeholder="Category" value={category} 
                        onChange={this.handleChange}
                        className="form-control" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" placeholder="Description" value={description}
                        onChange={this.handleChange} 
                        className="form-control" type="text"></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="url">Url</label>
                        <input name="url" placeholder="Url" value={url} 
                        onChange={this.handleChange}
                        className="form-control" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="git">Git</label>
                        <input name="git" placeholder="Git" value={git} 
                        onChange={this.handleChange}
                        className="form-control" type="text"/>
                    </div>

                    <input type="submit" className="btn btn-primary" value="Submit"/>
                </form>
            </section>
        )
    }
}

export default ProjectHandler;