import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Webfont from "webfontloader";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/action/userAction";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import UserOptions from "./component/layout/Header/UserOptions";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import Payment from "./component/Cart/Payment";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard";
import ProductList from "./component/Admin/ProductList";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);

  // console.log("user======",user.role);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    console.log("data=======", data.stripeApiKey);
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    Webfont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    dispatch(loadUser());
    getStripeApiKey();
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/product/:id" Component={ProductDetails} />
        <Route path="/products" Component={Products} />
        <Route path="/products/:keyword" Component={Products} />
        <Route path="/search" Component={Search} />
        <Route path="/login" Component={LoginSignUp} />
        <Route path="/password/forgot" Component={ForgotPassword} />
        <Route path="/password/reset/:token" Component={ResetPassword} />
        <Route path="/cart" Component={Cart} />
        <Route path="/contact" Component={Contact} />
        <Route path="/about" Component={About} />

        {loading == false && (
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/account" Component={Profile} />
            <Route path="/me/update" Component={UpdateProfile} />
            <Route path="/password/update" Component={UpdatePassword} />
            <Route path="/login/shipping" Component={Shipping} />
            <Route path="/order/confirm" Component={ConfirmOrder} />
            <Route path="/success" Component={OrderSuccess} />
            <Route path="/orders" Component={MyOrders} />
            <Route path="/order/:id" Component={OrderDetails} />
            {/* <Route path="/admin/dashboard" Component={Dashboard} /> */}
          </Route>
        )}

        {stripeApiKey && (
          <Route
            path="/process/payment"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <Payment />
                </Elements>
              </ProtectedRoute>
            }
          />
        )}
        {loading == false && (
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={user?.role}
                isAdmin={true}
              >
                <Dashboard />
              </ProtectedRoute>
            }
          />
        )}
        {loading == false && (
          <Route
            path="/admin/products"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={user?.role}
                isAdmin={true}
              >
                <ProductList />
              </ProtectedRoute>
            }
          />
        )}
        {loading == false && (
          <Route
            path="/admin/product"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={user?.role}
                isAdmin={true}
              >
                <NewProduct />
              </ProtectedRoute>
            }
          />
        )}
        {loading == false && (
          <Route
            path="/admin/product/:id"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={user?.role}
                isAdmin={true}
              >
                <UpdateProduct />
              </ProtectedRoute>
            }
          />
        )}
        {loading == false && (
          <Route
            path="/admin/orders"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={user?.role}
                isAdmin={true}
              >
                <OrderList />
              </ProtectedRoute>
            }
          />
        )}
        {loading == false && (
          <Route
            path="/admin/order/:id"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={user?.role}
                isAdmin={true}
              >
                <ProcessOrder />
              </ProtectedRoute>
            }
          />
        )}
        {loading == false && (
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={user?.role}
                isAdmin={true}
              >
                <UsersList />
              </ProtectedRoute>
            }
          />
        )}
        {loading == false && (
          <Route
            path="/admin/user/:id"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={user?.role}
                isAdmin={true}
              >
                <UpdateUser />
              </ProtectedRoute>
            }
          />
        )}
        {loading == false && (
          <Route
            path="/admin/reviews"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={user?.role}
                isAdmin={true}
              >
                <ProductReviews />
              </ProtectedRoute>
            }
          />
        )}

        <Route
        path="*"
          Component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
