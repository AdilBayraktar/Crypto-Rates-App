import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function DataTable(props) {
  return (
    <>
      <Table bordered responsive className="mt-5 p-5">
        <thead>
          <tr>
            <th>Coin</th>
            {/* <th>Symbol</th> */}
            <th>Current Price</th>
            <th>Price Change/24h</th>
            <th>Global Rank</th>
            <th>Updated At</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody className="">
          {props.coins
            .slice(
              (props.pageNumber - 1) * 10,
              (props.pageNumber - 1) * 10 + 10
            )
            .map((coin) => {
              return (
                <tr className="align-items-center" key={coin.id}>
                  <td className="d-flex align-items-center">
                    <div>
                      <img
                        src={coin?.image}
                        width="40px"
                        className="rounded-circle"
                        alt=""
                      />
                    </div>

                    <div className="px-2 text-start">
                      <h6 className="">
                        <strong className="text-uppercase">
                          {coin?.symbol}
                        </strong>
                      </h6>
                      <small>{coin?.name}</small>
                    </div>
                  </td>
                  {/* <td>
                    <strong>{coin?.symbol}</strong>
                  </td> */}
                  <td className="fw-bold">${coin?.current_price.toFixed(2)}</td>
                  <td>
                    {
                      <strong
                        className={
                          coin?.price_change_percentage_24h > 0
                            ? "text-success"
                            : "text-danger"
                        }
                      >
                        <i className="bi bi-soundwave"></i>{" "}
                        {coin?.price_change_percentage_24h.toFixed(3)}
                      </strong>
                    }
                  </td>
                  <td>{coin?.market_cap_rank}.st</td>
                  <td className="text-muted">
                    {new Date(coin?.last_updated).toLocaleString()}
                  </td>

                  <td>
                    <Link to={`/coins/${coin.id}`}>
                      <i className="bi bi-eye"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}

export default DataTable;
