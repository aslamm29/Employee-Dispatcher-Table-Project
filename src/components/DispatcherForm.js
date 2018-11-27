import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addEntry } from '../Actions/index';

class DispatcherForm extends Component{
    renderField(field) {
        return(
            <div>
                <label>{field.label}</label><br />
                <input 
                style={field.meta.touched && field.meta.error ? styles.block : styles.defaultBlock}
                type="text"
                {...field.input}
                /><br />
                <div style={styles.text}>
                {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values){
        this.props.addEntry(values)
        this.props.history.push('/')
    }

    render(){

        const { handleSubmit } = this.props
        return(
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Dispatcher Form Table Entries</h3>
            <Field 
            label="Date"
            name="date"
            component={this.renderField}
            />
            <Field 
            label="Project"
            name="project"
            component={this.renderField}
            />
            <Field 
            label="Total"
            name="total"
            component={this.renderField}
            />
            <Field 
            label="Close"
            name="close"
            component={this.renderField}
            />
            <Field 
            label="Super"
            name="super"
            component={this.renderField}
            />
            <button type='submit'>Submit</button>
            <Link to='/'><button type='submit' style={styles.button}>Cancel</button></Link>            
        </form>
        )
    }
}

function validate (values){
    const errors={}

    if(!values.date){
        errors.date = "Enter a date"
    }
    if(!values.project){
        errors.project = "Enter a project name"
    }
    if(!values.total){
        errors.total = "Enter the total"
    }
    if(!values.close){
        errors.close ="Enter the detail"
    }
    if(!values.super){
        errors.super = "Enter the detail"
    }

    return errors
}

const styles = {
    block: {
        border: '1px solid red'
    },
    text: {
        color: 'red'
    },
    defaultBlock: {
        border: '1px solid black'
    },
    button: {
        marginLeft: '10px'
    }
}

function mapDispatchToProps(dispatch){
return bindActionCreators({ addEntry: addEntry }, dispatch)
}

export default reduxForm({
    validate,
    form: 'dispatchNewForm'
})(connect(null, mapDispatchToProps)(DispatcherForm))