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

  const [goods, setGoods] = useState([]);
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [direction, setDirection] = useState(1);
  const [wordLength, setWordLength] = useState(0);


  const loadGoods = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLoad(true);
      setGoods(goodsFromServer)
    }, 300)
  }
  const reverse = (arr) => {
    const result = arr.reverse();

    setGoods([...result]);
  }

  const sortByAlpha = (arr) => {
    direction === 1 ? setDirection(-1) : setDirection(1);
    const result = arr.sort((a, b) => direction * a.localeCompare(b));

    setGoods([...result]);
  }

  const handleChange = (e) => setWordLength(e.target.value);

  const result = goods.filter(good => good.length >= +wordLength).map((item, index) => <li key={index}>{item}</li>)

  if(!load) {
    return !loading ? <button onClick={() => loadGoods()}>Load</button> : 'Loading...'
  }
  return (
    <div className="App">
      <h1>Goods {goods.length}</h1>

      <button onClick={() => reverse(goods)}>rev</button>
      <button onClick={() => sortByAlpha(goods)}>sort</button>
      <select onChange={(e) => handleChange(e)} >
        <option value="2">2</option>
        <option value="5">5</option>
        <option value="7">7</option>
      </select>
      <ul>{result}</ul>
    </div>
  )
}


export default App;
