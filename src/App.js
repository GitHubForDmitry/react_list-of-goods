import React from 'react';
import Load from "./components/Load";

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

  const [load, setLoad] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [goods, setGoods] = React.useState([])
  const [direction, setDirection] = React.useState(1)
  const [wordLength, setWordLength] = React.useState(0)


  const loadTodo = () => {
    setLoading(true)
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
          setLoading(false);
          setLoad(true);
          setGoods(goodsFromServer)
        }
      );
  }

  const direct = () => direction === 1 ? setDirection(-1) : setDirection(1);

  const sort = () => {
    direct();

    const result = goods.sort((a, b) => direction * ( a.localeCompare(b)));

    setGoods([...result]);
  };

  const handleChange = (e) => {
    setWordLength(e.target.value);
  };

  const result = goods.filter(item => item.length >= +wordLength).map((item, index) => <li key={index}>{item}</li>).slice(0, 20);

  const reverse = () => {
    const result = goods.reverse();
    setGoods([...result]);
  }

  if(!load) {
  return (
    loading ? 'loading...' : <Load load={loadTodo} text='Load'/>
  )}
  return (
  <div className="App">
    <h1>Goods {result.length}</h1>
    <ul>
      {result}
    </ul>
    <Load load={reverse} text='rev'/>
    <Load load={sort} text='sort'/>
    <select onChange={(e) => handleChange(e)}>
      <option value="1">1</option>
      <option value="7">7</option>
    </select>
  </div>
);


}


export default App;
