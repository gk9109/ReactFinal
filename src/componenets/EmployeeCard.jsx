import React, { useContext, useState } from 'react';
import { FavoritesContext } from './Favorites';
import EmployeeMap from './EmployeeMap';

export default function EmployeeCard({ item }) {
  const [expanded, setExpanded] = useState(false);
  const [locationExpanded, setLocationExpanded] = useState(false);

  // accessing these with useContext, initially declared in Favorites
  const { favorites, setFavorites } = useContext(FavoritesContext);

  // check if this item already exists in the favorites array
  // .some() returns true if at least one favorite has the same email as the current item
  const isFavorite = favorites.some(fav => fav.email === item.email);

  const toggleFavorite = () => {
    let updated;

    if (!isFavorite) {
      // if the item is NOT already in favorites,
      // add it by creating a new array with the current favorites plus the new item
      updated = [...favorites, item];
    } else {
      // if the item IS already in favorites,
      // remove it by filtering out the one with the same email
      updated = favorites.filter(fav => fav.email !== item.email);
    }

    // update the favorites state with the new array
    setFavorites(updated);
  };

  // handles more info button
  const toggle = () => setExpanded(!expanded);
  // handles more location info button
  const toggleLocationDitails = () => setLocationExpanded(!locationExpanded);

  return (
    <div className="card mb-4 shadow">
      <div className="card-body d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            className="rounded-circle me-3 border"
            src={expanded ? item.picture.large : item.picture.medium}
            alt={`${item.name.first} ${item.name.last}`}
            width="64"
            height="64"
          />
          <div>
            <h5 className="mb-1">{item.name.first} {item.name.last}</h5>
            <small className="text-muted">{item.location.country}</small>
          </div>
        </div>

        <div className="d-flex gap-2">
          <button
            className="btn btn-sm btn-outline-info"
            onClick={toggle}
          >
            {expanded ? 'Less Info' : 'More Info'}
          </button>

          <span
            className="material-symbols-outlined"
            onClick={toggleFavorite}
            style={{
              cursor: 'pointer',
              fontSize: '32px',
              color: isFavorite ? 'gold' : 'gray'
            }}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? 'bookmark_added' : 'bookmark'}
          </span>
        </div>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="card-body">
          <ul className="list-unstyled mb-3">
            <li><strong>📧 Email:</strong> {item.email}</li>
            <li><strong>📞 Phone:</strong> {item.phone}</li>
            <li><strong>📱 Cell:</strong> {item.cell}</li>
            <li><strong>🏠 Address:</strong> {item.location.city}, {item.location.state}</li>
            <li><strong>🏘️ Street:</strong> {item.location.street.number} {item.location.street.name}</li>
          </ul>

          <button
            className="btn btn-sm btn-outline-secondary mb-3"
            onClick={toggleLocationDitails}
          >
            {locationExpanded ? 'Hide Location Details' : 'Show Location Details'}
          </button>

          {locationExpanded && (
            <div>
              <ul className="list-unstyled mb-3">
                <li><strong>📮 Postcode:</strong> {item.location.postcode}</li>
                <li><strong>🌐 Coordinates:</strong> {item.location.coordinates.latitude}, {item.location.coordinates.longitude}</li>
                <li><strong>🕒 Timezone:</strong> {item.location.timezone.offset} ({item.location.timezone.description})</li>
              </ul>

              {/* The randomuser.me API gives fake/random coordinates.
              So the latitude and longitude from item.location.coordinates don’t
              actually correspond to the item.location.city or country. */}
              <EmployeeMap
                lat={item.location.coordinates.latitude}
                lng={item.location.coordinates.longitude}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
