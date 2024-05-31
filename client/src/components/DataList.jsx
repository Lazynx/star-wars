import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { formatKey } from '../utils/formatKey';

function DataList({ apiEndpoint, dataKeys }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(apiEndpoint)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(`There was an error fetching the data from ${apiEndpoint}`, error);
      });
  }, [apiEndpoint]);

  return (
    <div className="card-container">
      {data.map((item, index) => (
        <div key={index} className="card">
          <h3 className="card__title special">{item.name || item.title}</h3>
          {dataKeys.map(key => (
            <p className="card__info" key={key}>{formatKey(key)}: <span className="special">{item[key]}</span></p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DataList;
