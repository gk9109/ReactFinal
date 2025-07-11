import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Favorites from './componenets/Favorites.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
  
)
