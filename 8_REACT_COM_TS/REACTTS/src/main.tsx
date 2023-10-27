import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { InfoContexProvider } from './components/Main'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<InfoContexProvider>
<App />
</InfoContexProvider>
  </React.StrictMode>,
)
