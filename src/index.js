import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from 'Root';
import { App } from 'components';

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={App}></Route>
    </BrowserRouter>
  </Root>,
  document.getElementById('root')
);
