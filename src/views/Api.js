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
  const [blist, setBlist] = useState([]); //법정동api

  useEffect(() => {
    fetch("http://localhost:8080/v1/api001/001.do", { method: "GET" })
      .then((res) => res.json())
      // .catch((error) => console.log(error))
      .then((res) => {
        console.log(res.response.body.items.item);
        setList(res.response.body.items.item);
      });
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:8080/v1/api001/adr.do", {method: "GET"})
  //   .then((res2) => res2.json())
  //   // .catch((error) => console.log(error))
  //   .then(res2 => {
  //    console.log('법정동 : ' + res2.response.body.items.item)
  //    setBlist(res2.response.body.items.item);
  //   });
  // }, []);

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
                {/* 주소 검색 */}
                {/* https://juso.dev/docs/reg-code-api/ */}
                <form>
                  <Row>
                      <div class="pr-1 col-md-3">
                        <label>시/도</label>
                          <select  class="form-control">
                            <option>test1</option>
                            <option>test2</option>
                          </select>
                        {/* <select  class="form-control">
                          {blist.length > 0 && blist.map((item, index) => (
                            <option>{item["시도코드"]}</option>
                          ))}
                        </select> */}
                      </div>
                      <div class="px-1 col-md-3">
                        <label>시/군/구</label>
                          <select  class="form-control">
                            <option>test1</option>
                            <option>test2</option>
                          </select>
                      </div>
                      <div class="px-1 col-md-3">
                        <label>읍/면/동</label>
                            <select  class="form-control">
                              <option>test1</option>
                              <option>test2</option>
                            </select>
                      </div>
                      <div class="pl-1 col-md-3">
                        <label>리</label>
                              <select  class="form-control">
                                <option>test1</option>
                                <option>test2</option>
                              </select>
                      </div>
                  </Row>
                </form>
                {/* <Form>
                <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          defaultValue="Mike"
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Country"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control
                          placeholder="ZIP Code"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form> */}


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
                    {list.length > 0 &&
                      list.map((item, index) => (
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
