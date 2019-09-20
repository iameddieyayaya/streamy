import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions/index'; // fetchStream,  editstream actions
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          // initialValues={this.props.stream}
          // ^^ this way the whole object including the id & userID get passed
          // as initialValues. We just want to extract the title and description.
          //
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          // initialValues is a reduxForm specfic prop.
          // the object keys matchs the form name in StreamForm.
          // the component check to see if there is any inital values from the parent component
          // if so they get passed down.
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
