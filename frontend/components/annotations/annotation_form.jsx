import React from 'react';

class AnnotationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: "", song_id: props.song.id, start_idx: props.start, end_idx: props.end};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    }
  }

  componentDidMount() {
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createAnnotation(this.state).then(this.setState({body: ""}));
  }

  render () {
    return (
      <div className="annotation-form-container">
        <form onSubmit={this.handleSubmit}>
            <textarea row="40" col="40" onChange={this.update('body')} value={this.state.body}/>
            <button type="submit">Save</button>
        </form>
      </div>
    )
  }

}

export default AnnotationForm;