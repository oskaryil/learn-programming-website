import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RoutingProvider from './providers/RoutingProvider';
import * as serviceWorker from './serviceWorker';
import Navbar from './elements/Navbar';
import './index.css';

const App = ({ children }) => <div className="App">{children}</div>;

ReactDOM.render(
  <App>
    <BrowserRouter>
      <div>
        <Navbar />
        <RoutingProvider />
      </div>
    </BrowserRouter>
  </App>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
