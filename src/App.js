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
  const [goods, setGoods] = useState('');
  const [direction, setDirection] = useState(1);
  const [wordLength, setWordLength] = useState(0);

  const loadGoods = () => {
    setLoading(true)
    setTimeout(() => {
      setLoad(true)
      setGoods(goodsFromServer)
      setLoading(false)
    }, 300)
  }
  console.log(goods)
  const reverse = arr => {
    const result = arr.reverse();
    setGoods([...result]);
  }

  const sorting = arr => {
  if(direction === 1) {
    setDirection(-1)
  }  else setDirection(1);

   const result = arr.sort((a, b) => direction * (a.length - b.length)  )

    setGoods([...result])
  };

  const handleChange = (e) => setWordLength(e.target.value);

  if(!load) {
    return (
      loading ? 'Loading...' : <button onClick={() => loadGoods()}>Load</button>
    )

  }
  return (
  <div className="App">
    <h1>Goods {goods.length}</h1>
    {goods.length && goods.filter(word => word.length >= +wordLength).map((item, i) => <li key={i}>{item}</li>)}

    <button onClick={() => sorting(goods)}>sort</button>
    <button onClick={() => reverse(goods)}>reverse</button>
    <select onChange={handleChange}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="9">9</option>
    </select>
  </div>
)};

export default App;






















//
//
//
// import React, { useState } from 'react';
//
// const goodsFromServer = [
//   'Dumplings',
//   'Carrot',
//   'Eggs',
//   'Ice cream',
//   'Apple',
//   'Bread',
//   'Fish',
//   'Honey',
//   'Jam',
//   'Garlic',
// ];
//
// const App = () => {
//   // eslint-disable-next-line no-unused-vars
//
//   const [goods, setGoods] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isLoad, setIsLoad] = useState(false);
//   const [direction, setDirection] = useState(1);
//   const [wordLength, setWordLength] = useState(0);
//
//
//   const revers = (arr) => {
//     const rev = arr.reverse();
//     setGoods([...rev]);
//   }
//   const sort = (arr) => {
//     direction === 1 ?
//       setDirection(-1)
//       : setDirection(1);
//
//     const sort1 = arr.sort(((a, b) => direction * ( b.length - a.length )));
//     setGoods([...sort1]);
//   }
//   const load = () => {
//     setIsLoading(true)
//
//     setTimeout(() => {
//       setGoods(goodsFromServer);
//       setIsLoad(true)
//     }, 100)
//   }
//
//   if(!isLoad) {
//     return (
//       !isLoading ? <button onClick={load}>Load</button> : 'Loading...'
//     )
//   }
//   if(!!goods.length)
//     return (
//       <div className="App">
//         <h1>Goods {goods.length}</h1>
//         <ul>
//           {goods.filter(item => item.length >= +wordLength).map((good, i) => <li key={i}>{good}</li>)}
//         </ul>
//
//         <button onClick={() => revers(goods)}>reverse</button>
//         <button onClick={() => sort(goods)}>sort</button>
//         <select onChange={e => setWordLength(e.target.value)}>
//           <option value='1'>1</option>
//           <option value='2'>2</option>
//           <option value='3'>3</option>
//           <option value='4'>4</option>
//           <option value='5'>5</option>
//           <option value='6'>6</option>
//           <option value='7'>7</option>
//           <option value='8'>8</option>
//         </select>
//       </div>
//     );
// };
//
// export default App;
//
