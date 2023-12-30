import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const StockRow=(props)=> {

    const stockData = [
        { symbol: 'AAPL', price: 150.25, volume: 1000 },
        { symbol: 'GOOGL', price: 2500.75, volume: 500 },
        { symbol: 'MSFT', price: 300.50, volume: 750 },
      ];

    return (
      <>
            //display stock data using card
            <tr>
            <td>
            
            <div className="col-md-4 py-2">
            <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">{props.ticker}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{props.dayHigh}</h6>
              <p className="card-text">{props.ticker}</p>
              <p className="card-text">{props.dayHigh}</p>
              <p className="card-text">{props.dayLow}</p>
               {/*if perchange>0 show green else show red badge*/}
              
               <p className="card-text">Change: {" "}<span className={props.perchange > 0 ? "badge bg-success" : "badge bg-danger"}>{props.perchange}</span></p>
     
              </div>
          </div>
          </div>
          </td>
          <td>
          <div className="col-md-4 py-2">
            <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">{props.ticker}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{props.dayHigh}</h6>
              <p className="card-text">{props.ticker}</p>
              <p className="card-text">{props.dayHigh}</p>
              <p className="card-text">{props.dayLow}</p>
               {/*if perchange > 0 show green badge else show red badge*/}
              
              <p className="card-text">Change: {" "}<span className={props.perchange>0 ? "badge bg-success" : "badge bg-danger"}>{props.perchange}</span></p>
     
              </div>
          </div>
          </div>
          </td>
          <td>
          <div className="col-md-4 py-2">
            <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">{props.ticker}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{props.dayHigh}</h6>
              <p className="card-text">{props.ticker}</p>
              <p className="card-text">{props.dayHigh}</p>
              <p className="card-text">{props.dayLow}</p>
               {/*if perchange>0 show green else show red badge*/}
              
               <p className="card-text">Change: {" "}<span className={props.perchange>0 ? "badge bg-success" : "badge bg-danger"}>{props.perchange}</span></p>
     
              </div>
          </div>
          </div>
          </td>
          </tr>
          
          </>
    )
}
export default StockRow;