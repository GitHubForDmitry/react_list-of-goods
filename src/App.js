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
    setLoading(true)

    setTimeout(() => {
      setLoading(false);
      setLoad(true);
      setGoods(goodsFromServer);
    }, 300)
  };
  const reverse = (arr) =>{
    const result = arr.reverse();

    setGoods([...result])
  }
  const sort = (arr) => {
    direction === 1 ? setDirection(-1) : setDirection(1);
    const result = arr.sort(((a, b) => direction * (a.length - b.length)));

    setGoods([...result]);
  };

  const handleSelectWordLength = (e) => setWordLength(e.target.value);

  const result = goods.filter(good => good.length >= +wordLength).map((item, index) => <li key={index}>{item}</li>);


  if(!load) {
    return (
      loading ? 'Loading...' : <button onClick={() => loadGoods()}>Load</button>
    )
  }
  return (
    <div className="App">
      <h1>Goods {goods.length}</h1>
      <ul>
        {result}
      </ul>

      <select onChange={e => handleSelectWordLength(e)}>
        <option value="1">1</option>
        <option value="7">7</option>
      </select>
      <button onClick={() => reverse(goods)}>reverse</button>
      <button onClick={() => sort(goods)}>sort</button>
    </div>
    );
}

export default App;
