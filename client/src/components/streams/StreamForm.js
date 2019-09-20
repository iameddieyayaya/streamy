import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }

  renderInput = formProps => {
    console.log(formProps);

    //className when it is false; it'll add 'error' to the class field.
    //Hence, 'field ' or 'field error'
    const className = `field ${
      formProps.meta.error && formProps.meta.touched ? 'error' : ''
    }`;
    return (
      // <input
      //   onChange={formProps.input.onChange}
      //   value={formProps.input.value}
      // />  --- Before refactoring
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete='off' />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form error'>
        {/* Field component only deals with data passes it to the reducer, but doesn't not render any form element.*/}
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter Description'
        />
        <Field
          name='ideas'
          component={this.renderInput}
          label='Enter feedback'
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    // ran if user didn't enter a title
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);
