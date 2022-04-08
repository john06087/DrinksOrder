// react-bootstrap components
import {
  Card, Col, Container,
  Row, Table
} from "react-bootstrap";
import React, { useState } from "react";
import swal from 'sweetalert2';
import * as callApiUtil from "../util/CallApiUtil"
import * as validationUtil from "../util/ValidationUtil"



function DrinksOrderList() {
  // State
  const [drinksOrderList, setDrinksOrderList] = useState([]);


  // ComponentDidMount
  React.useEffect(() => {
    // 初始化查詢當天日期
    let date = '20220102'

    // Action: 查詢飲料訂單
    queryDrinksOrderList(date);
  }, []);


  // Function
  function queryDrinksOrderList(date) {
    // 建立 input
    let vin = {
      orderDate: date
    }

    // call API
    callApiUtil.callApiPost('http://localhost:8000/drinksController/drinksOrderList', vin).then((data) => {
      if (validationUtil.notEmpty(data)) {
        if (data.result) {
          
          // setState
          let drinksOrderSlice = data.drinks_order_slice
          setDrinksOrderList(drinksOrderList => (drinksOrderSlice)); 
        } else {
          swal.fire('Error!', '取得資料失敗', 'error');
        }
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
                <Card.Title as="h4">資訊部飲料訂單</Card.Title>
                <p className="card-category">
                  (日期) 訂單
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">編號</th>
                      <th className="border-0">訂購姓名</th>
                      <th className="border-0">飲品名稱</th>
                      <th className="border-0">甜度</th>
                      <th className="border-0">冰量</th>
                      <th className="border-0">價格</th>
                      <th className="border-0">備註</th>
                    </tr>
                  </thead>
                  <tbody>
                    {drinksOrderList != null && drinksOrderList.length > 0 ?
                     drinksOrderList.map((drinksOrder, index) => {
                      return (  
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{drinksOrder.User_name}</td>
                          <td>{drinksOrder.Drinks_name}</td>
                          <td>{drinksOrder.Sugar == 0 ? '無糖' : drinksOrder.Sugar == 1 ? '微糖' : 
                               drinksOrder.Sugar == 2 ? '少糖' : '全糖'}</td>
                          <td>{drinksOrder.Ice == 0 ? '去冰' : drinksOrder.Ice == 1 ? '微冰' : 
                               drinksOrder.Ice == 2 ? '少冰' : '正常冰'}</td>
                          <td>{drinksOrder.Price} 元</td>
                          <td>{drinksOrder.Note}</td>
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

export default DrinksOrderList;
