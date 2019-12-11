import React, { useState, useEffect } from 'react';
import goodsFromServer from './data/goods';

const App = () => {
  const [goods, setGoods] = useState([...goodsFromServer]);
  const [loadGoods, setLoadGoods] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [wordLength, setwordLength] = useState(1);
  const [direction, setDirection] = useState(1);

  const loadData = () => {
    setTimeout(() => {
      setLoadGoods(prevState => true);
      setIsLoading(prevState => false);
    }, 500);
    setIsLoading(true);
  };
  const reverse = () => {
    const sorted = [...goods].reverse();

    setGoods(sorted);
  };
  const sortAlphabetically = () => {
    const sorted = [...goods].sort((a, b) => a !== b ? a < b ? -1 : 1 : 0);

    setGoods([...sorted]);
  };

  if (!loadGoods) {
    return (
      <button
        type="submit"
        className="btn btn-success mt-5"
        onClick={() => loadData()}
        disabled={isLoading}
      >
        {isLoading ? '...Loading' : 'Load'}
      </button>
    );
  }

  return (
    <div className="goods">
      {goods
        .map(good => <li key={good.toString()}>{good}</li>)}
      <button
        type="submit"
        className="btn btn-primary mt-5 mb-5 mr-3"
        onClick={reverse}
      >
        reverse
      </button>
      <button
        type="submit"
        className="btn btn-primary mt-5 mb-5 mr-3"
        onClick={sortAlphabetically}
      >
        getSortAlphabetically
      </button>
    </div>
  );
};

export default App;
