import React from 'react'
import ReactDOM from 'react-router'
import { BrowserRouter } from 'react-router'

import Pages from './pages/containers/Page.jsx'

ReactDOM.render(
  <BrowserRouter>
    <Pages />
  </BrowserRouter>,
  document.getElementById('render-target')
)