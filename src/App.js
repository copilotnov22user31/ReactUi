import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockRow, { getStockRow } from './StockRow/StockRow';
import { useEffect, useState } from 'react';
import { getStocks } from './StockRow/getStocks';

//import bootstrap



function App() {
 
const [stocks,setStocks]=useState([]);
//use Effect to get stocks

useEffect(()=>{
  const fetchStocks=async()=>{
    const stocks=await getStocks();
    setStocks(stocks);
  };
  fetchStocks();
} 
,[]);



  return (
    <div className='container'>
    <table className="table">
<thead>
  <tr>
    <th>Stock</th>
    <th>Price</th>
    <th>Volume</th>
  </tr>
</thead>
<tbody>
{
stocks.map((stock,index)=>( 
    <StockRow key={stock.symbol} ticker={stock.symbol} dayHigh={stock.dayHigh} dayLow={stock.dayLow} perchange={stock.perChange30d}></StockRow>
))
}
</tbody>
</table> 
    </div>
  );
}

export default App;
