import React from 'react';

interface CountryCardProps {
    name: {
      common: string;
    };
    capital: string;
    flags: {
      png: string;
    };
}

export function CountryCard({ country }: { country: CountryCardProps }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100" style={{ backgroundColor: 'lightblue', borderRadius: '10px' }}>
        <div className="card-header" style={{ backgroundColor: 'blue', color: 'white' }}>{country.name.common}</div>
        <div className="card-body">
          <p className="card-text">Столица: {country.capital}</p>
          <img src={country.flags.png} className="card-img-top" alt={country.name.common} />
        </div>
      </div>
    </div>
  );
};