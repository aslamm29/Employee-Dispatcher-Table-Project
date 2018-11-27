import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addUnavailability } from '../Actions'


class UnavailableForm extends Component{

renderField(field){
return(
<div>
<label>{field.label}</label><br />
<input 
style={field.meta.touched && field.meta.error ? styles.block : styles.defaultBlock}
type="text"
{...field.input}
/><br />
<div style={styles.text}>
{field.meta.touched ? field.meta.error : ""}
</div>
</div>
)
}

onSubmit(values){
this.props.addUnavailability(values)
this.props.history.push('/')
}

render(){
    const {handleSubmit} = this.props
    return(
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <h3>Unavailable List Entry Form</h3>
           <Field
           label="Employee Name" 
           name="employeename"
           component={this.renderField}
           />
           <Field
           label="Class" 
           name="classun"
           component={this.renderField}
           />
           <Field
           label="Project Description" 
           name="projectdescun"
           component={this.renderField}
           />
           <Field
           label="Date" 
           name="dateun"
           component={this.renderField}
           />
           <button type="Submit">Submit</button>
           <Link to="/"><button style={styles.button}>Cancel</button></Link>
        </form>
    )
}
}

const styles = {
    button: {
        marginLeft: 10
    },
    text: {
        color: 'red'
    },
    block: {
        border: '1px Solid Red'
    },
    defaultBlock: {
        border: '1px Solid Black'
    }
}

function validate(values){
const errors = {}

if(!values.employeename){
    errors.employeename = "Enter a employee name"
}
if(!values.classun){
    errors.classun = "Enter a class"
}
if(!values.projectdescun){
    errors.projectdescun = "Enter a project description"
}
if(!values.dateun){
    errors.dateun = "Enter a date"
}
return errors
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ addUnavailability: addUnavailability }, dispatch)
}

export default reduxForm({ validate, form: 'formUnavailable'})(connect(null, mapDispatchToProps)(UnavailableForm))