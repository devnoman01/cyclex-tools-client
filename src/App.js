import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import RequireAuth from "./Pages/Authentication/RequireAuth";
import Blogs from "./Pages/Blogs/Blogs";
import AddProduct from "./Pages/Dashboard/AddProduct";
import AddReview from "./Pages/Dashboard/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Home from "./Pages/Home/Home";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import NotFound from "./Pages/NotFound/NotFound";
import Purchase from "./Pages/Purchase/Purchase";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          {/* open routes */}
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/myPortfolio" element={<MyPortfolio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />

          {/* protected routes */}
          <Route
            path="/purchase/:id"
            element={
              <RequireAuth>
                <Purchase />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<MyProfile />} />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="addReview" element={<AddReview />} />
            <Route path="myProfile" element={<MyProfile />} />
            <Route path="manageProducts" element={<ManageProducts />} />
            <Route path="manageAllOrders" element={<ManageAllOrders />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="makeAdmin" element={<MakeAdmin />} />
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
