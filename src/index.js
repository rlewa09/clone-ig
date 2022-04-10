import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './helpers/firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={(firebase, FieldValue)}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
