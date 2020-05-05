import React from 'react';
import { addNewProject } from '../redux/actions/projectActions';
import { updateProject } from '../redux/actions/projectActions';
import { connect } from 'react-redux';

class  ProjectHandler extends React.Component {
    constructor(props){
        super(props);

        this.fileRef = React.createRef();
        this.state = {
            project: {
                name: "",
                category: "",
                description: "",
                url: "",
                git: "",
                image: null
            },
            validation: {
                valid: false,
                type: 'empity',
                input: ['name', 'category', 'description']
            },
            isEdit: false
        }
    }

    componentDidMount(){
        if(this.props.match.params.id !== undefined && this.props.location.state !== undefined){
            this.setState({
                project: this.props.location.state,
                validation: {
                    valid: true,
                    type: '',
                    input: []
                },
                isEdit: true
            })
        }
    }

    handleChange = (e) => {
        const newProject = this.state.project;
        newProject[e.target.name] = e.target.value;
        this.setState({
            project: newProject
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.isEdit){
            this.props.updateProject(this.state.project);
        }else{
            this.props.addNewProject(this.state.project);
        }

    }

    handleValid = (e) => {
        let newValidation = this.state.validation;
        newValidation.input = newValidation.input.filter(value => value !== e.target.name);
        if(e.target.value === ""){
            newValidation ={
                valid: false,
                type: "required",
                input: [...newValidation.input, e.target.name]
            }
        }
        if(newValidation.input.length === 0){
            newValidation = {
                valid: true,
                type: '',
                input: []
            }
        }
        this.setState({ validation: newValidation});
    }

    handleAlert = () => {
        return(
            !this.state.validation.valid && this.state.validation.type !== 'empity' &&
            <div className="alert alert-warning" role="alert">
                Form is invalid 
                {
                    this.state.validation.input.map((control, index) => (
                        <span key={index} style={{fontWeight: 900}}> {control},</span>
                    ))
                }
                { ` is ${this.state.validation.type}` }
                <br/>
            </div>
        )
    }

    handleFile = (e) => {
        let newProject = this.state.project;
        newProject.image = this.fileRef.current.files[0];
        this.setState({
            project: newProject
        })
    }

    render(){
        const {name, category, description, url, git} = this.state.project;
        return(
            <section className='container text-center' style={{paddingTop: '48px'}}>
                <h1>{this.state.isEdit ? "Edit Project" : "Create Project"}</h1>
                <hr/>
                { this.handleAlert() }
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input name="name" placeholder="Name" value={name} 
                        onChange={this.handleChange}
                        onBlur={this.handleValid} 
                        className={"form-control "} type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <input name="category" placeholder="Category" value={category} 
                        onChange={this.handleChange}
                        onBlur={this.handleValid}
                        className="form-control" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" placeholder="Description" value={description}
                        onChange={this.handleChange} 
                        onBlur={this.handleValid} 
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

                    <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="uploadImage">Upload</span>
                    </div>
                    <div className="custom-file">
                        <input ref={this.fileRef} onChange={this.handleFile} type="file" className="custom-file-input" id="uploadImg" aria-describedby="uploadImage"/>
                        <label className="custom-file-label" htmlFor="uploadImg">Choose file</label>
                    </div>
                    </div>                       

                    <input type="submit" className="btn btn-primary" value="Submit" 
                    disabled={this.state.validation.valid === false}
                    />
                </form>
            </section>
        )
    }
}

const mapDispatchToProps = {
    addNewProject,
    updateProject
}

export default connect(null, mapDispatchToProps)(ProjectHandler);