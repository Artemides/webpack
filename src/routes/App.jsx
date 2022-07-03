import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/global.css";
import { Layout } from "../containers/Layout";
import { Login } from "../pages/Login";
import { RecoveryPassword } from "../containers/RecoveryPassword";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import { SendMail } from "../pages/SendMail";
import { NewPassword } from "../pages/NewPassword";
import { MyAccount } from "../pages/MyAccount";
import { CreateAccount } from "../pages/CreateAccount";
import { Checkout } from "../pages/Checkout";
import { Order } from "../components/Order";
const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/recovery-password" element={<RecoveryPassword/>} />
          <Route exact path="/send-email" element={<SendMail/>}/>
          <Route exact path="/new-password" element={<NewPassword/>}/>
          <Route exact path="/account" element={<MyAccount/>}/>
          <Route exact path="/signup" element={<CreateAccount/>}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
          <Route exact path="/orders" element={<Order/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
