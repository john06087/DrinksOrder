import {
  Button,
  Card, Col, Container, Form, Row
} from "react-bootstrap";
import React, { useState } from "react";
import swal from 'sweetalert2';
import * as callApiUtil from "../util/CallApiUtil"
import * as validationUtil from "../util/ValidationUtil"


function DrinksOrderInfo() {
  // State
  const [userName, setUserName] = useState(''); // 訂購者姓名
  const [drinksName, setDrinksName] = useState(''); // 飲料名稱
  const [sugar, setSugar] = useState(-1); // 甜度
  const [ice, setIce] = useState(-1); // 冰量
  const [price, setPrice] = useState(''); // 價格
  const [note, setNote] = useState(''); // 備註
  const [validateErrorMsg, setValidateErrorMsg] = useState(''); // 表單驗證錯誤訊息

  
  // Function
  // 送出飲料訂單
  function submitDrinksOrder() {
    // 建立 input
    let today = new Date();
    let monthString = (today.getMonth() + 1) < 10 ? '0' + (today.getMonth() + 1).toString() : (today.getMonth() + 1).toString()
    let dayString = today.getDate() < 10 ? '0' + today.getDate().toString() : today.getDate().toString()
    let orderDate = today.getFullYear().toString() + monthString + dayString;
    let vin = {
      User_name: userName,
      Drinks_name: drinksName,
      Sugar: parseInt(sugar, 10),
      Ice: parseInt(ice, 10),
      Price: parseInt(price, 10),
      Note: note,
      Order_date: orderDate
    }

    // 驗證輸入參數
    let validateResult = validateInput();
 
    // call API
    if(validateResult) {
      callApiUtil.callApiPost('http://localhost:8000/drinksController/saveDrinksOrder', vin).then((data) => {
        if (validationUtil.notEmpty(data)) {
          if (data.result) {
            swal.fire('Success!', '新增訂單成功', 'success');
          } else {
            swal.fire('Error!', '新增訂單失敗', 'error');
          }
        }
      })
    }
  }
  // 驗證 input 參數
  function validateInput() {
    let validateResult = true;

    // 驗證所有欄位格式是否正確
    if(validationUtil.isEmpty(userName) ||
       validationUtil.isEmpty(drinksName) ||
       !(sugar >= 0 && sugar <= 3) ||
       !(ice >= 0 && ice <= 3) ||
       !(price > 0)
    ) {
      validateResult = false;
      setValidateErrorMsg(validateErrorMsg => ('請填入所有必填訊息')); 
    } else {
      setValidateErrorMsg(validateErrorMsg => ('')); 
    }

    return validateResult;
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <span className="text-danger">*</span><label>User name</label>
                        <Form.Control
                          placeholder="訂購者姓名"
                          type="text"
                          value={userName}
                          onChange={(e)=>setUserName(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <span className="text-danger">*</span><label>Drinks name</label>
                        <Form.Control
                          placeholder="飲料名稱"
                          type="text"
                          value={drinksName}
                          onChange={(e)=>setDrinksName(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <span className="text-danger">*</span><label>price</label>
                        <Form.Control
                          placeholder="金額"
                          type="number"
                          value={price}
                          onChange={(e)=>setPrice(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <span className="text-danger">*</span><label>Sugar</label>
                        <Form.Control
                          placeholder="甜度"
                          as="select"
                          value={sugar}
                          onChange={(e)=>setSugar(e.target.value)}
                        >
                          <option value="-1">請選擇</option>
                          <option value="0">無糖</option>
                          <option value="1">微糖</option>
                          <option value="2">少糖</option>
                          <option value="3">全糖</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                      <span className="text-danger">*</span><label>Ice</label>
                        <Form.Control
                          placeholder="冰量"
                          as="select"
                          value={ice}
                          onChange={(e)=>setIce(e.target.value)}
                        >
                          <option value="-1">請選擇</option>
                          <option value="0">去冰</option>
                          <option value="1">微冰</option>
                          <option value="2">少冰</option>
                          <option value="3">正常冰</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                      <span className="text-danger">*</span><label>Note</label>
                        <Form.Control
                          cols="80"
                          placeholder="加料，備註事項"
                          rows="4"
                          as="textarea"
                          value={note}
                          onChange={(e)=>setNote(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <span className="text-danger">{validateErrorMsg}</span><br></br>
                  <Button
                    className="btn-fill pull-right"
                    type="button"
                    variant="info"
                    onClick={() => submitDrinksOrder()}
                  >
                    送出訂單
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
         
        </Row>
      </Container>
    </>
  );
}

export default DrinksOrderInfo;
