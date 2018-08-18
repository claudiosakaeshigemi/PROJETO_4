import React , { Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {


    renderField(field) {
        return (
            <div className = "form-group"> 
            <label> {field.label} </label>
                <input 
                className= "form-control"
                type = "text"
                    { ...field.input }
                />
                {field.meta.error}
            </div>
        );
    }

    onSubmit(values ) {
        console.log(values);
    }


    render() {
        const {handleSubmit } = this.props;
        return  ( 
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}> 
                <Field
                    label = "Title For Post: "
                    name= "title"
                    component = {this.renderField}
                />
                <Field
                    label = "Categories: "
                    name= "Categories"
                    component = {this.renderField}
                />
                <Field
                    label = "Post Content: "
                    name= "Content"
                    component = {this.renderField}
                />

                <button type ="submit" className="btn btn-primary">submit </button>
                
            </form>
        );
    }
}

function validate(values ) {
    const errors = {};

    if(!values.title || values.title.length < 3 ){
        errors.title = "Enter a title, that is at least 3 characters!";
    }
    if(!values.categories || values.categories.length < 3 ){
        errors.categories = "Enter some categories, that is at least 3 characters!";
    }
    if(!values.content || values.content.length < 3  ){
        errors.content = "Enter some content, that is at least 3 characters!";
    }

    return errors;
}

export default reduxForm({
    validate , 
    form: 'PostsNewForm'
})  (PostsNew);