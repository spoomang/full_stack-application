// Currently this will show input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import FeedbackFields from './Fields';

const FIELDS = [
    {label: "From", name:"from"},
    {label: "Subject", name:"subject"},
    {label: "Feedback", name:"feedback"},
]

class Feedback extends Component {

    renderFields() {
        const fields = FIELDS.map(field => {
            return <Field key={field.name} component={FeedbackFields} label={field.label} name={field.name}/>
        })

        return fields;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => this.props.onFeedbackSubmit())}>
                    {this.renderFields()}
                    <Link to="/feedback" className="red btn-flat white-text" >
                        Cancel    
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.from) {
        errors.from = 'Please input from';
    }

    if(!values.subject) {
        errors.subject = 'Please input subject';
    }

    if(!values.feedback) {
        errors.feedback = 'Please input feeback';
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'feedbackForm',
})(Feedback);
