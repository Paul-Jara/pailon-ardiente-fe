import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './component/Layout'
import Home from './pages/client/Home'
import Register from './pages/SignUp'
import Login from './pages/Login'
import Catalog from './pages/client/Catalog'
import PrivateRoute from './component/auth/PrivateRoute'
import Help from './pages/client/Help'
import ProductAdd from './pages/client/product/ProductAdd'
import Order from './pages/client/order/Order'
import Users from './pages/admin/Users'
import UserProfile from './pages/client/UserProfile'
import Cart from './pages/client/Cart'
import MessageSuccess from './pages/client/MessageSuccess'
import Orders from './pages/client/order/Orders'
import AdminOrders from './pages/admin/AdminOrders'
import AdminOrder from './pages/admin/AdminOrder'
import ProductDetail from './pages/client/product/ProductDetail'
import OrderVerify from './pages/client/order/OrderVerify'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/help' element={<Help />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/catalog/:category' element={<Catalog />} />
            <Route path='/product/add/:productId' element={<ProductAdd />} />
            <Route path='/product/:productId' element={<ProductDetail />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/admin/order/:orderId' element={<AdminOrder />} />
            <Route path='/users' element={<Users />} />
            <Route path='/user' element={<UserProfile />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order/verify' element={<OrderVerify />} />
            <Route path='/order/success' element={<MessageSuccess />} />
            <Route path='/order/:orderId' element={<Order />} />
            <Route path='/admin/orders' element={<AdminOrders />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
