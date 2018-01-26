import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' }
  }

  handleChange(e) {
    this.setState({ comment: e.target.value });
  }

  onClickBtn(e) {
    e.preventDefault();
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this.onClickBtn.bind(this)} className="comment-box">
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)}
        />
      <button action="submit">Submit Comment</button>
      </form>
    );
  }
}
export default CommentBox;
