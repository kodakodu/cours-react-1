import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className='countries'>
      <ul className='radio-container'>
        <input
          type='range'
          min='1'
          max='250'
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
      </ul>
      <ul>
        {data.slice(0, rangeValue).map((country, index) => (
          //   <li key={index}>{country.translations.fra.common}</li>
          <Card key={index} country={country} />
        ))}
      </ul>
      <button>Button</button>
    </div>
  );
};

export default Countries;
