import React from 'react';
import {render } from 'react-dom'
import {PermissionsProvider} from './PermissionContext';
import App from './App';


render(
    <PermissionsProvider>
      <App/>
    </PermissionsProvider>,
    document.getElementById('root')
  );


