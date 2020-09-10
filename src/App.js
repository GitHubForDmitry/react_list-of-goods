import React, { useState } from 'react';

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

  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [goods, setGoods] = useState([]);
  const [direction, setDirection] = useState(1);
  const [wordLength, setWordLength] = useState(0);

  const loadGoods = () => {
    setLoading(true);
    setTimeout(() => {
      setLoad(true);
      setLoading(false);
      setGoods(goodsFromServer);
    }, 200)
  };

  const reverse = (arr) => {
    const result = arr.reverse();

    setGoods([...result]);
  }

  const sortAlphabetic = (arr) => {
    direction === 1 ? setDirection(-1) : setDirection(1);
    const result = arr.sort((a, b) => direction * (a.localeCompare(b)));

    setGoods([...result]);
  }

  const sort = (arr) => {
    direction === 1 ? setDirection(-1) : setDirection(1);
    const result = arr.sort((a, b) => direction * (a.length - b.length));

    setGoods([...result]);
  }

  const handleChange = (e) => setWordLength(e.target.value);

  const results = goods.filter(word => word.length >= +wordLength)
    .map((item, i) => <li key={i}>{item}</li>);

  if (!load) {
    return (
      loading ? 'Loading...' : <button onClick={() => loadGoods()}>load</button>
  )
  }
  return (
    <div>
      <h1>Goods {goods.length}</h1>
      <ul>
        {results}
      </ul>

      <button onClick={() => reverse(goods)}>reverse</button>
      <button onClick={() => sortAlphabetic(goods)}>sortAlph</button>
      <button onClick={() => sort(goods)}>sort</button>
      <select onChange={(e) => handleChange(e)}>
        <option value="1">1</option>
        <option value="10">10</option>
      </select>
    </div>
  )

}

export default App;
