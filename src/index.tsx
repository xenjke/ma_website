import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Helmet } from 'react-helmet';

import appleTouchIcon from "./assets/favicons/apple-touch-icon.png"
import largeFavicon from "./assets/favicons/favicon-32x32.png"
import smallFavicon from "./assets/favicons/favicon-16x16.png"
import safariPinned from "./assets/favicons/safari-pinned-tab.svg"

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
      <title>Mango Alley</title>
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={largeFavicon} />
      <link rel="icon" type="image/png" sizes="16x16" href={smallFavicon} />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href={safariPinned} color="#373737" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff"></meta>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
