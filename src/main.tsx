import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { EnableMSW } from './api/mocks'
import { App } from './app'

EnableMSW().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
