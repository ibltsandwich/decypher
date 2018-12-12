import React from 'react';

class AnnotationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: "", 
                  song_id: props.song.id, 
                  start_idx: props.start_idx, 
                  end_idx: props.end_idx,
                  start_line: parseInt(props.start_line),
                  end_line: parseInt(props.end_line)
                 };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createAnnotation(this.state)
        .then(this.setState({body: ""}));
  }

  render () {
    return (
      <div className="annotation-form-container">
        <div className="annotation-form-divider"/>
        <div className="triangle-container">
          <div className="triangle-top" />
          <div className="triangle-tip" />
          <div className="triangle-bottom" />
        </div>
        <form onSubmit={this.handleSubmit} className="annotation-form">
            <textarea className="annotation-form-text" 
                      onChange={this.update('body')} 
                      value={this.state.body}
                      placeholder={this.props.slice}/>
            <button type="submit" className="annotation-form-submit">Save</button>
        </form>
      </div>
    )
  }

}

export default AnnotationForm;