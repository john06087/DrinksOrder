import React, { useState } from "react";
// react-bootstrap components
import {
  Card, Col, Container,
  Row, Table
} from "react-bootstrap";
import * as callApiUtil from "../util/CallApiUtil"



function TableList() {
  // State
  const [drinksOrderList, setDrinksOrderList] = useState([]);



  // ComponentDidMount
  React.useEffect(() => {
    // 初始化查詢當天日期
    let date = '1234'

    // Action: 查詢飲料訂單
    queryDrinksOrderList(date);


  }, []);

  // Function
  function queryDrinksOrderList(date) {
    let vin = {
      orderDate: date
    }

    callApiUtil.callApiPost('http://localhost:8000/drinksController/drinksOrderList', vin).then((data) => {
      if (data.result) {
        let drinksOrderSlice = data.drinks_order_slice
        let drinksOrders = [];
        let seq = 1;

        // setState
        setDrinksOrderList(drinksOrderList => (drinksOrderSlice)); 
      } else {
        swal.fire('Error!', '取得資料失敗', 'error');
      }
    })
  }

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
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    {drinksOrderList != null && drinksOrderList.length > 0 ?
                     drinksOrderList.map((item, index) => {
                      return (  
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>Dakota Rice</td>
                          <td>$36,738</td>
                          <td>Niger</td>
                          <td>Oud-Turnhout</td>
                        </tr>);
                      }):null
                    }
                  
                   
                  
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
