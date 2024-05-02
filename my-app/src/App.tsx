import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CountryCard } from './components/CountryCard';


function App() {
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Ошибка при загрузке данных: ', error));
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Список стран</h1>
      <div className="row">
        {countries.map(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default App;
