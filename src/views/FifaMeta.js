import React, { useEffect, useState } from "react";

import matchtypes from "../static/matchtype.json";
import spids from "../static/spid.json";
import seasonids from "../static/seasonid.json";
import sppositions from "../static/spposition.json";

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
  FormSelect,
} from "react-bootstrap";

function TableList() {
  const [spidList, setSpidList] = useState(spids.slice(0, 40));
  const [search, setSearch] = useState({
    name: "",
    page: 1,
    pagenum: Math.ceil(spids.length / 40),
  });

  const handleChange = (event) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value,
    });
  };

  const onclickSearch = () => {
    const list = spids.filter((x) => x.name.includes(search.name));

    setSpidList(list.slice(0, 40));

    setSearch({
      ...search,
      page: 1,
      pagenum: Math.ceil(list.length / 40),
    });
  };

  useEffect(() => {
    onchangePage();
  }, [search.page]);

  const onchangePage = () => {
    const list = spids.filter((x) => x.name.includes(search.name));

    setSpidList(
      list.slice((search.page - 1) * 40, (search.page - 1) * 40 + 40)
    );

    setSearch({
      ...search,
      pagenum: Math.ceil(list.length / 40),
    });
  };

  const detail = (id) => {
    fetch("http://localhost:8080/v1/api/fifa/001.do", { method: "GET" })
      .then((res) => res.json())
      // .catch((error) => console.log(error))
      .then((res) => {
        setList(res);
      });
  };

  const { name, page, pagenum } = search;

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="4">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Match Type</Card.Title>
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
                      <th className="border-0">Season Id</th>
                      <th className="border-0">mark</th>
                      <th className="border-0">Class Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seasonids.length > 0 &&
                      seasonids.map((item, index) => (
                        <tr key={index}>
                          <td>{item.seasonId}</td>
                          <td>
                            <img alt="..." src={item.seasonImg}></img>
                          </td>
                          <td>{item.className}</td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Position</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Id</th>
                      <th className="border-0">Position</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sppositions.length > 0 &&
                      sppositions.map((item, index) => (
                        <tr key={index}>
                          <td>{item.spposition}</td>
                          <td>{item.desc}</td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label>name</label>
                      <Form.Control
                        defaultValue=""
                        placeholder="name"
                        type="text"
                        name="name"
                        value={name || ""}
                        onChange={handleChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md="2">
                    <Form.Group>
                      <label>search</label>
                      <Button
                        className="btn-fill pull-right"
                        type="submit"
                        variant="info"
                        md="6"
                        onClick={onclickSearch}
                      >
                        Search
                      </Button>
                    </Form.Group>
                  </Col>
                  <Col md="1">
                    <Form.Group>
                      <label>page</label>
                      <FormSelect
                        md="2"
                        onChange={handleChange}
                        name="page"
                        value={page || "1"}
                      >
                        {Array.from({ length: pagenum }, (item, index) => (
                          <option value={index}>{index + 1}</option>
                        ))}
                      </FormSelect>
                    </Form.Group>
                  </Col>
                </Row>
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">spid</th>
                      <th className="border-0">name</th>
                      <th className="border-0">image</th>
                      <th className="border-0">action shot</th>
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
                              src={
                                "https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p" +
                                parseInt(("" + item.id).substring(3)) +
                                ".png"
                              }
                            ></img>
                          </td>
                          <td>
                            <img
                              alt="..."
                              src={`https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p${item.id}.png`}
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
