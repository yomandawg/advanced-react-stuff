import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { App, CommentBox, CommentList } from 'components';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it('shows a comment box', () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(wrapper.find(CommentList).length).toEqual(1);
});
