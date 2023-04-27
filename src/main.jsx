import React from 'react';
import ReactDOM from 'react-dom/client';

// import * as bootstrap from 'bootstrap';
import '@styles/styles.scss';

// import { Provider } from 'react-redux';
// import store from '@stores/store';

import { RouterProvider } from 'react-router-dom';
import router from '@routes/router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <RouterProvider router={router} />
    {/* </Provider> */}
  </React.StrictMode>,
);
