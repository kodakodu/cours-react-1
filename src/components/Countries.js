import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Countries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className='countries'>
      <h1>Countries</h1>
      <ul>
        {data.map((country, index) => (
          <li key={index}>{country.translations.fra.common}</li>
        ))}
      </ul>
      <button>Button</button>
    </div>
  );
};

export default Countries;
