import React, { useState } from 'react';
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
    const sorted = [...goods].sort((a, b) => (a !== b ? (a < b ? -1 : 1) : 0));

    setGoods(sorted);
  };
  const sortAlphabetically2 = () => {
    const sorted = [...goods].sort((a, b) => (a !== b ? (a > b ? -1 : 1) : 0));

    setGoods(sorted);
  };
  const getSortByLength = () => {
    const sorted = [...goods].sort((a, b) => direction * (a.length - b.length));

    setGoods(sorted);
  };
  const handleChange = (event) => {
    setwordLength(event.target.value);
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
      {[...goods]
        .filter(good => good.length >= wordLength)
        .map(good => (
          <li key={good.toString()}>{good}</li>
        ))}
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
      <button
        type="submit"
        className="btn btn-primary mt-5 mb-5 mr-3"
        onClick={sortAlphabetically2}
      >
        getSortAlphabetically
      </button>
      <button
        type="submit"
        className="btn btn-primary mt-5 mb-5 mr-3"
        onClick={getSortByLength}
      >
        SortByLength
      </button>
      <label className="btn btn-warning">
        length
        <select
          value={wordLength}
          onChange={handleChange}
          name="length"
          className="form-control form-control-sm"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </label>
    </div>
  );
};

export default App;
