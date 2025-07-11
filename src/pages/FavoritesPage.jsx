import React, { useContext } from 'react';
import { FavoritesContext } from '../componenets/Favorites';
import EmployeeCard from '../componenets/EmployeeCard';

export default function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className='container mt-3'>
      {/* if not favorites found, display header, if found, display employee cards*/}
      {favorites.length === 0 ? (
        <h3>No favorites yet.</h3>
      ) : (
        favorites.map((item, i) => (
          <EmployeeCard key={i} item={item} />
        ))
      )}
    </div>
  );
}
