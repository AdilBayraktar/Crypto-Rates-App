import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function CoinPage() {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [historicalData, setHistoricalData] = useState([]);
  const [days, setDays] = useState(30);
  //   console.log(params);

  const getCoineData = async () => {
    const { data } = await axios
      .get(`https://api.coingecko.com/api/v3/coins/${params.id}`)
      .then((res) => {
        return res;
      });
    console.log(`${data}`);
    setCoin(data);
  };

  const getHistoricalData = async () => {
    const { data } = await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=USD&days=${days}`
      )
      .then((res) => {
        return res;
      });
    console.log("Data: ", data.prices);
    setHistoricalData(data.prices);
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Rates Statistics",
      },
    },
  };
  const data = {
    labels: historicalData.map((coin) => {
      let date = new Date(coin[0]);
      let time =
        date.getHours() > 12
          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
          : `${date.getHours()}:${date.getMinutes()} AM`;
      return days === 1 ? time : date.toLocaleDateString();
    }),
    datasets: [
      {
        data: historicalData.map((coin) => coin[1]),
        label: `Rates in past ${days} days for ${coin}`,
        borderColor: "rgb(245, 245, 7)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  useEffect(() => {
    getCoineData();
    getHistoricalData();
  }, [days]);

  return (
    <>
      {coin && historicalData.length > 0 ? (
        <Container className="my-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <small className="text-muted fw-bold ">
              Last Update: {new Date(coin?.last_updated).toLocaleString()}
            </small>
          </div>
          <Row>
            <Col className="p-3" md={4}>
              <Card className="shadow p-3 rounded-5 mb-3">
                <div className="d-flex align-items-center justify-content-start">
                  <img
                    src={coin?.image?.large}
                    height="80"
                    className="mx-1"
                    alt=""
                  />
                  <h3 className="text-uppercase mx-4">
                    {coin?.symbol} <p className="fs-6">{coin?.name}</p>
                    <p className="fs-2 fw-bold">
                      ${coin?.market_data?.current_price?.usd.toFixed(3)}{" "}
                    </p>
                    <small
                      className={
                        coin?.market_data?.price_change_24h < 0
                          ? "bg-danger bg-opicity-50 px-3 rounded-5 fs-6 text-white"
                          : "bg-success  px-3 rounded-5 fs-6 text-white"
                      }
                    >
                      {coin?.market_data?.price_change_24h.toFixed(3)}{" "}
                      {coin?.market_data?.price_change_24h < 0 ? (
                        <i className="bi bi-activity"></i>
                      ) : (
                        <i className="bi bi-activity"></i>
                      )}
                    </small>
                  </h3>
                </div>
              </Card>
            </Col>
            <Col className="p-3" md={8}>
              <Container className="m-auto w-100 shadow p-3 rounded-5">
                <Line options={options} data={data} />
                <div className="d-flex justify-content-center">
                  <Button
                    variant="outline-warning"
                    className="mx-2 rounded-5"
                    onClick={() => setDays(7)}
                  >
                    Last Week
                  </Button>
                  <Button
                    variant="outline-warning"
                    className="mx-2 rounded-5"
                    onClick={() => setDays(30)}
                  >
                    Last Month
                  </Button>
                  <Button
                    variant="outline-warning"
                    className="mx-2 rounded-5"
                    onClick={() => setDays(365)}
                  >
                    Last Year
                  </Button>
                </div>
              </Container>
            </Col>
          </Row>
          <Row className="my-3">
            <h3 className="text-warning my-3 fw-bold">Market Data:</h3>
            <Col sm>
              <Card className="shadow p-3 rounded-5 mb-3 text-center">
                <Card.Subtitle className="text-muted text-uppercase">
                  {coin?.symbol} | EUR
                </Card.Subtitle>
                <Card.Title className="text-success fs-3 my-2">
                  {" "}
                  {coin?.market_data?.current_price?.eur.toFixed(3)}
                </Card.Title>
              </Card>
            </Col>
            <Col sm>
              <Card className="shadow p-3 rounded-5 mb-3 text-center">
                <Card.Subtitle className="text-muted text-uppercase">
                  {coin?.symbol} | TRY
                </Card.Subtitle>
                <Card.Title className="text-success fs-3 my-2">
                  {" "}
                  {coin?.market_data?.current_price?.try.toFixed(3)}
                </Card.Title>
              </Card>
            </Col>
            <Col sm>
              <Card className="shadow p-3 rounded-5 mb-3 text-center">
                <Card.Subtitle className="text-muted text-uppercase">
                  {coin?.symbol} | AED
                </Card.Subtitle>
                <Card.Title className="text-success fs-3 my-2">
                  {coin?.market_data?.current_price?.aed.toFixed(3)}
                </Card.Title>
              </Card>
            </Col>
            <Col sm>
              <Card className="shadow p-3 rounded-5 mb-3 text-center">
                <Card.Subtitle className="text-muted text-uppercase">
                  {coin?.symbol} | SAR
                </Card.Subtitle>
                <Card.Title className="text-success fs-3 my-2">
                  {" "}
                  {coin?.market_data?.current_price?.sar.toFixed(3)}
                </Card.Title>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default CoinPage;
