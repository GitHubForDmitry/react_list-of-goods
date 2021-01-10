import React, { useState, useEffect } from 'react';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const App = () => {
  const [goods, setGoods] = useState([]);
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [direction, setDirection] = useState(-1);

  const sort = (a, b) => {
    direction === - 1 ? setDirection(direction * -1) : setDirection(direction);
    const result = direction * (a.length - b.length)
    setGoods(result);
  };
  const loadGoods = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setGoods(goodsFromServer);

      setLoad(true)
    }, 300)
  };

  if (!load) {
    return (loading ? <h1>loading...</h1> : <button onClick={loadGoods}>Load</button>)
  }

  return (

  <div className="App">
    <h1>There are {goodsFromServer.length} goods</h1>
    <ul>
      {goods.map((good, index) => (
        <li key={index}>{good}</li>)
      )}
    </ul>
  </div>
  )};

export default App;
