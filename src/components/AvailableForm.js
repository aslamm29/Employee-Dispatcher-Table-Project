import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { bindActionCreators } from "redux"
import { addAvailability } from '../Actions/index'
import { connect } from 'react-redux'

class AvailableForm extends Component{
    renderField(field){
        return(
            <div>
                <label>{field.label}</label><br />
                <input
                type="text"
                style={field.meta.touched && field.meta.error ? styles.block : styles.defaultBlock}
                {...field.input} 
                />
                <div style={styles.text}>
                {field.meta.touched ? field.meta.error : ""}
                </div>
            </div>
        )
    }

    onSubmit(values){
        this.props.addAvailability(values)
        this.props.history.push('/')
    }

    render(){
        const { handleSubmit } = this.props
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                label="Employee Name"
                name="empname"
                component={this.renderField}
                />
                <Field 
                label="Class"
                name="class"
                component={this.renderField}
                />
                <Field 
                label="Project Description"
                name="projectdesc"
                component={this.renderField}
                />
                <Field 
                label="Date"
                name="availabledate"
                component={this.renderField}
                />
                <button type="Submit">Submit</button>
                <Link to="/"><button style={styles.button}>Cancel</button></Link>
            </form>
        )
    }
}

function validate(values){
    const errors ={}

    if(!values.empname){
        errors.empname = "Enter a employee Name"
    }
    if(!values.class){
        errors.class = "Enter a class"
    }
    if(!values.projectdesc){
        errors.projectdesc = "Enter a project Description"
    }
    if(!values.date){
        errors.date = "Enter a date"
    }
    return errors
}

const styles = {
    button: {
        marginLeft: 10
    },
    text: {
        color: "red"
    },
    block: {
        border: "1px Solid Red"
    },
    defaultBlock: {
        border: "1px Solid Black"
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ addAvailability: addAvailability }, dispatch)
}

export default reduxForm({ validate, form: 'availableNewForm' })(connect(null, mapDispatchToProps)(AvailableForm))