import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(0);
  const onSelect = (event) => {
    setValue(event.target.value);
  }
  const onChange = (event) => {
    setAmount(event.target.value);
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, [])
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : 
        <select onChange={onSelect}>
        {coins.map((coin, index) => 
          <option key = {index} value = {(coin.quotes.USD.price).toFixed(4)}>
          {coin.name} ({coin.symbol})
          </option>
          )}
        </select>
      
      }
      <hr />
      <h2>Money To Coins</h2>
      USD per coin : {value} USD <br/>
      Type your money <br/>
      <input
        onChange={onChange}
        placeholder="Money(USD)"
        value = {amount} 
      />
      {' ->'} {(amount/value).toFixed(4)}coins
    </div>
  );
  
}

export default App;