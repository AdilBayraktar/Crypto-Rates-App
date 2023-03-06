import React from "react";
import { Card, Container } from "react-bootstrap";

function AboutPage() {
  return (
    <>
      <Container style={{ minHeight: "100vh" }}>
        <Card className="rounded-5 shadow my-5 text-center p-5 border-0">
          <Card.Title className="fs-3 fw-bold text-warning">
            Crypto Rates Tracker App
          </Card.Title>
          <Card.Subtitle className="text-success fw-bold my-2">
            Created By Adil BAYRAKTAR
          </Card.Subtitle>
          <Card.Text className="my-3 text-start">
            <strong className="fs-5 text-secondary">
              Technologies & Tools:
            </strong>
            <ul style={{ listStyle: "none" }}>
              <li>- ReactJs</li>
              <li>- React Bootstrap</li>
              <li>- Coingecko API</li>
              <li>- React Chartjs</li>
              <li>- Axios</li>
            </ul>
          </Card.Text>
        </Card>
      </Container>
    </>
  );
}

export default AboutPage;
