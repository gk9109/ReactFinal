import { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export default function Favorites ({ children }) {
  //favorites = []
  const [favorites, setFavorites] = useState([]);

  //returns a list items from 'favorites' in local storage and sets the, in favorites list
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(stored);
  }, []);

  const updateFavorites = (newFavorites) => {
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return (
    //shares context with childern -> wrapped in app
    <FavoritesContext.Provider value={{ favorites, setFavorites: updateFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
