import React, { useEffect, useState } from "react";

import matchtypes from "../static/matchtype.json";
import spids from "../static/spid.json";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  const [spidList, setSpidList] = useState(spids.slice(0, 10));

  const detail = (id) => {
    fetch("http://localhost:8080/v1/api/fifa/001.do", { method: "GET" })
      .then((res) => res.json())
      // .catch((error) => console.log(error))
      .then((res) => {
        setList(res);
      });
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="6">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Striped Table with Hover</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Match Type</th>
                      <th className="border-0">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matchtypes.length > 0 &&
                      matchtypes.map((item, index) => (
                        <tr key={index}>
                          <td>{item.matchtype}</td>
                          <td>{item.desc}</td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">spid</th>
                      <th className="border-0">name</th>
                      <th className="border-0">image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {spidList.length > 0 &&
                      spidList.map((item, index) => (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>
                            <img
                              alt="..."
                              src={`https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p${item.id}.png`}
                            ></img>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
