import React from "react";
import { Container } from "react-bootstrap";
import { BallTriangle, ThreeCircles } from "react-loader-spinner";

function Loader() {
  return (
    <>
      <Container>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "80vh" }}
        >
          <ThreeCircles
            height="100"
            width="100"
            color="rgb(255,193,7)"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </div>
      </Container>
    </>
  );
}

export default Loader;
