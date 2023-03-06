import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function TrendingSlider() {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const getTrendingCoins = async () => {
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"
    );
    console.log(data);
    setTrendingCoins(data);
  };
  const responsive = {
    0: {
      items: 2,
    },
    1024: {
      items: 6,
    },
  };

  const items = trendingCoins.map((coin) => {
    return (
      <Link to={`/coins/${coin.id}`}>
        <div className="text-center rounded-5 mt-5 border m-2 p-1">
          <img
            src={coin?.image}
            height="60"
            alt={coin?.name}
            className="rounded-circle"
          />
          <div className="d-flex justify-content-center text-dark">
            <p className="text-uppercase">{coin?.symbol}</p>
            {"  "}
            <small
              className={
                coin?.price_change_percentage_24h > 0
                  ? "text-success mt-1"
                  : "text-danger mt-1"
              }
            >
              <i className="bi bi-soundwave"></i>{" "}
              {coin?.price_change_percentage_24h.toFixed(2)}
            </small>
          </div>
          <strong className="text-dark">{coin?.current_price}</strong>
        </div>
      </Link>
    );
  });

  useEffect(() => {
    getTrendingCoins();
  }, []);
  return (
    <>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableButtonsControls
        disableDotsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </>
  );
}

export default TrendingSlider;
