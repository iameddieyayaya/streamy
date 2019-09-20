import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/index';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
        {/* Made the form its own component therefore, we can reuse it. 
        call onSubmit which
         */}
      </div>
    );
  }
}

export default connect(
  null,
  { createStream } //connects actions
)(StreamCreate);
