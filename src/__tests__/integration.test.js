import moxios from 'moxios';
import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import { App } from 'components';

beforeEach(() => {
  // moxios intercepts any request issued by axios
  moxios.install();

  // intercept request going to this url and return a fabricated response
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
  });
});

afterEach(() => {
  // cleanup
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  // Attempt to render the entire app
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  );

  wrapper.find('.fetch-comments').simulate('click'); // clarify custom class for easier finding

  // pause
  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find('li').length).toEqual(2);

    done(); // letting know that the test is done
    wrapper.unmount();
  });
});
