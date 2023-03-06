import React from "react";
import { Button } from "react-bootstrap";

function Pagination(props) {
  return (
    <>
      <Button
        variant="outline-dark"
        disabled={props.pageNumber === 1}
        onClick={() => {
          props.setPageNumber(props.pageNumber - 1);
          window.scrollTo(0, 0);
        }}
      >
        <i className="bi bi-caret-left-fill"></i>
      </Button>
      <Button
        variant="outline-dark"
        color="success"
        disabled={props.pageNumber === 10}
        onClick={() => {
          props.setPageNumber(props.pageNumber + 1);
          window.scrollTo(0, 0);
        }}
      >
        <i className="bi bi-caret-right-fill"></i>
      </Button>
    </>
  );
}

export default Pagination;
