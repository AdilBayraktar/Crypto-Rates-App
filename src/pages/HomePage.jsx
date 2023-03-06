import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import DataTable from "../components/DataTable";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import TrendingSlider from "../components/TrendingSlider";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const getAllCoins = async () => {
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    setCoins(data);
  };
  useEffect(() => {
    getAllCoins();
  }, []);
  return (
    <>
      {coins.length > 0 ? (
        <Container>
          <TrendingSlider />
          <DataTable coins={coins} pageNumber={pageNumber} />
          <div className="text-center mb-5">
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
          </div>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default HomePage;
