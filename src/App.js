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
  const [wordLength, setWordLength] = useState(0);

  const sort = (arr) => {
    direction === -1 ? setDirection(1) : setDirection(-1);
    const result = arr.sort(((a, b) => direction * (a.length - b.length)))
    setGoods([...result]);
  };

  const handleChange = (e) => setWordLength(e.target.value);
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
      {goods.filter(good => wordLength ? good.length <= wordLength : good).map((good, index) => (
        <li key={index}>{good}</li>)
      )}
    </ul>

    <button onClick={() => sort(goods)}>sort</button>
    <select onChange={handleChange}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="5">5</option>
      <option value="10">10</option>
    </select>
  </div>
  )};

export default App;
