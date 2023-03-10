import React, { useState, useEffect } from "react";
import "./css/global.style.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import PageInicio from "./routers/Inicio";
import PageLogin from "./routers/PageLogin";
import PageRegister from "./routers/PageRegister";

import PageAccount from "./routers/PageAccount"
import SectionOrders from "./routers/PageAccount/SectionOrders"
import SectionExchanges from "./routers/PageAccount/SectionExchanges"
import SectionVouchers from "./routers/PageAccount/SectionVouchers"
import SectionPersonalInfo from "./routers/PageAccount/SectionPersonalInfo"
import SectionAddresses from "./routers/PageAccount/SectionAddresses"
import SectionCards from "./routers/PageAccount/SectionCards"
import SectionPreferencesCenter from "./routers/PageAccount/SectionPreferencesCenter"


import PageAdminAccount from "./routers/admin/PageAdminAccount"
import SectionDashboard from "./routers/admin/PageAdminAccount/SectionDashboard"
import SectionProducts from "./routers/admin/PageAdminAccount/SectionProducts"
import SectionStock from "./routers/admin/PageAdminAccount/SectionStock"
import SectionAddProduct from "./routers/admin/PageAdminAccount/SectionAddProduct"

import PageCart from "./routers/PageCart"
import PageViewProduct from "./routers/PageProduct"
import PageCheckout from "./routers/PageCheckout"
import PageSearch from "./routers/PageSearch"




import CarouselProducts from "./components/CarouselProducts";

import {checkIfToken as checkForRoutesToken, checkIfUser as checkForRoutesUser, checkIfAdmin as checkForRoutesAdmin} from "./requestsAPI/checkForRoutes/public"

const PrivateRoute = ({children, redirectTo, isAuth})=>{
  const [auth, setAuth] = useState(null)

  useEffect( ()=>{
    isAuth().then(valid=> {
      setAuth(valid)
    })
  }, [])

  return auth === null ? <></> : auth ? children : <Navigate to={redirectTo}/>
}



function App() {
  
  return (
    <Router>
      <div className="App">
        <AnimatePresence>
          <Routes>
            <Route path="*" element={<h1>Não encontrado</h1>} />
            <Route path="/" element={<PageInicio />}/>
            
            <Route path="/auth/login" element={<PrivateRoute redirectTo="/" isAuth={checkForRoutesToken} ><PageLogin /></PrivateRoute>} />
            <Route path="/auth/register/natural" element={<PrivateRoute redirectTo="/" isAuth={checkForRoutesToken}><PageRegister /></PrivateRoute>} />

            <Route path="/new-account" element={<PrivateRoute redirectTo="/" isAuth={checkForRoutesUser}><PageAccount /></PrivateRoute>}>
              <Route path="" element={<SectionOrders/>}/>
              <Route path="my-orders" element={<SectionOrders/>}/>
              <Route path="my-exchanges" element={<SectionExchanges/>}/>
              <Route path="my-vouchers" element={<SectionVouchers/>}/>
              <Route path="my-personal-info" element={<SectionPersonalInfo/>}/>
              <Route path="my-addresses" element={<SectionAddresses/>}/>
              <Route path="my-cards" element={<SectionCards/>}/>
              <Route path="preferences-center" element={<SectionPreferencesCenter/>}/>
            </Route>

            <Route path="/admin-account" element={<PrivateRoute redirectTo="/" isAuth={checkForRoutesAdmin}><PageAdminAccount /></PrivateRoute>}>
              <Route path="" element={<SectionDashboard/>}/>
              <Route path="dashboard" element={<SectionDashboard/>}/>
              <Route path="products" element={<SectionProducts/>}/>
              <Route path="stock" element={<SectionStock/>}/>
              <Route path="add-product" element={<SectionAddProduct/>}/>
            </Route>

            <Route path="/product-view/:id"element={<PageViewProduct/>}/>
            <Route path="/cart" element={<PageCart/>}/>

            <Route path="/search" element={<PageSearch/>}>

            </Route>

            <Route path="/checkout" element={<PrivateRoute redirectTo="/auth/login" isAuth={checkForRoutesUser}><PageCheckout /></PrivateRoute>} />

            
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;

