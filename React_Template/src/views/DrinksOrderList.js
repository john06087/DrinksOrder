// react-bootstrap components
import {
  Button, Card, Col, Container,
  Row, Table
} from "react-bootstrap";
import React, { useState , forwardRef} from "react";
import swal from 'sweetalert2';
import * as callApiUtil from "../util/CallApiUtil"
import * as validationUtil from "../util/ValidationUtil"
import * as formatUtil from "../util/FormatUtil"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



function DrinksOrderList() {
  // State
  const [drinksOrderList, setDrinksOrderList] = useState([]);
  const [orderDate, setOrderDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const DateCustomInput = forwardRef(({ value, onClick }, ref) => (
    <Button className="btn-fill" type="button" variant="dark" onClick={onClick} ref={ref}>
      訂單日期: {value}
    </Button>
  ));

  
  // ComponentDidMount
  React.useEffect(() => {

    // 初始化查詢當天日期
    onOrderDateChange(new Date())

  }, []);

  
  // Function
  // 訂單日期變更時
  function onOrderDateChange(date) {
    setOrderDate(date)

    // 日期格式轉換
    var orderDate = formatUtil.dateFormatPattern1(date)

    // Action: 查詢飲料訂單
    queryDrinksOrderList(orderDate);
  }

  // Action: 查詢飲料訂單
  function queryDrinksOrderList(date) {
    // 建立 input
    let vin = {
      orderDate: date
    }

    console.log(date);

    // call API
    callApiUtil.callApiPost('http://localhost:8000/drinksController/drinksOrderList', vin).then((data) => {
      if (validationUtil.notEmpty(data)) {
        if (data.result) {
          
          // setState
          let drinksOrderSlice = data.drinks_order_slice
          setDrinksOrderList(drinksOrderSlice); 

          // 設定總金額
          let totalPrice = 0;
          if (validationUtil.notEmpty(drinksOrderSlice) && drinksOrderSlice.length > 0){
            drinksOrderSlice.forEach(function(item){
              totalPrice += item.Price
            });
          }
          setTotalPrice(totalPrice);
          
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
                  <DatePicker
                    selected={orderDate}
                    onChange={(date) => onOrderDateChange(date)}
                    customInput={<DateCustomInput />}
                  />
                </Card.Header>
                {drinksOrderList != null && drinksOrderList.length > 0 ? 
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
                        {drinksOrderList.map((drinksOrder, index) => {
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
                          })
                        }                  
                      </tbody>
                    </Table>
                  </Card.Body>
                :
                  <h2>查無訂單資訊</h2>
                }
              <h3>總金額: <span className="text-danger"> {totalPrice} </span> 元</h3>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DrinksOrderList;
