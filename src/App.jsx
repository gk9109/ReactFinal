import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './componenets/Header'
import HomePage from './pages/HomePage'
import FavoritesPage from './pages/FavoritesPage'
import Favorites from './componenets/Favorites'

function App() {
  return (
    <BrowserRouter>
      <Favorites>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
      </Favorites>
    </BrowserRouter>
  );
}


export default App
