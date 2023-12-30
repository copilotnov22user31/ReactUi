import axios from "axios";
//api url http://localhost:4000/stocks

export const getStocks = async () => {
    const response = await axios.get("http://localhost:4000/stocks");
    return response.data;
};
