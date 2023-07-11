// Import styles, initialize component theme here.
// import '../src/common.css';

import { BrowserRouter } from 'react-router-dom';

import { beforeMount } from '@playwright/experimental-ct-react/hooks';

export type HooksConfig = {
  enableRouting?: boolean;
} 

beforeMount<HooksConfig>(async ({App, hooksConfig}) => {
  if (hooksConfig?.enableRouting) {
    return <BrowserRouter><App /></BrowserRouter>;
  }
})