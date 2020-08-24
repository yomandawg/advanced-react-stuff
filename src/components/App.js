import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CommentBox, CommentList } from 'components';
import * as actions from 'actions';

export class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      );
    }
  }

  renderHeader() {
    return (
      <div>
        <Link style={{ margin: '0.5em' }} to="/">
          Home
        </Link>
        <Link style={{ margin: '0.5em' }} to="/post">
          Post
        </Link>
        <div style={{ margin: '0.5em', display: 'inline-block' }}>
          {this.renderButton()}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
