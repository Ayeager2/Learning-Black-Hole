import React, { Component } from 'react';
import { render } from 'react-dom';

import WithFragments from './WithFragments';
import WithoutFragments from './WithoutFragments';

render(
  <div>
    <WithoutFragments/>
    <WithFragments/>
  </div>,
  document.getElementById('root')
);
