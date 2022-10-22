import React, { useEffect, useState } from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/v1/api001/001.do", {method: "GET"})
    .then((res) => res.json())
    // .catch((error) => console.log(error))
    .then(res => {
      console.log(res.response.body.items.item)
      setList(res.response.body.items.item);
    });
  }, []);
  

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
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
                      <th className="border-0">거래금액</th>
                      <th className="border-0">건축년도</th>
                      <th className="border-0">법정동</th>
                      <th className="border-0">아파트</th>
                      <th className="border-0">도로명</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.length > 0 && list.map((item, index) => (
                      <tr>
                        <td>{item["거래금액"]}</td>
                        <td>{item["건축년도"]}</td>
                        <td>{item["법정동"]}</td>
                        <td>{item["아파트"]}</td>
                        <td>{item["도로명"]}</td>
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
