import '@optmove/design-system/dist/index.css'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  // <BrowserRouter>
      <App />
    // </BrowserRouter>,
)
