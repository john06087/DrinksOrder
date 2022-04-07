/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import DrinksOrderInfo from "views/DrinksOrderInfo.js";
import DrinksOrderList from "views/DrinksOrderList.js";

const dashboardRoutes = [
  {
    path: "/drinksOrderInfo",
    name: "填寫飲料訂單",
    icon: "nc-icon nc-circle-09",
    component: DrinksOrderInfo,
    layout: "/admin",
  },
  {
    path: "/DrinksOrderList",
    name: "查詢飲料訂單",
    icon: "nc-icon nc-notes",
    component: DrinksOrderList,
    layout: "/admin",
  },
];

export default dashboardRoutes;
