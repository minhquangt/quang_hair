import './App.css';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import ProductItemDetail from './components/ProductItemDetail';
import AlertInfo from './components/AlertInfo';

function App() {
  const [cartList, setCartList] = useState([])
  const [alertShow, setAlertShow] = useState(false)
  const [alertContent, setAlertContent] = useState('')
  const [alertStyle, setAlertStyle] = useState('')

  //Handle Button ADD TO CART
  const addCartItem = (itemAdd) => {
    const productExist = cartList.find(item => item.id === itemAdd.id);
    if (productExist) {
      setCartList(cartList.map(item => item.id === itemAdd.id ?
        { ...productExist, quantity: productExist.quantity + 1 } : item)
      )
    } else {
      setCartList([...cartList, { ...itemAdd, quantity: 1 }])
    }
    alertOn(itemAdd.name + " đã được thêm vào giỏ hàng", "success")
  }

  //Handle Button CLOSE X
  const deleteCartItem = (itemDelete) => {
    const newCartList = cartList.filter(item => item.id !== itemDelete.id)
    setCartList(newCartList)
    alertOn(itemDelete.name + " đã được xóa khỏi giỏ hàng", "danger")
  }

  //Handle Button PLUS + 
  const addBtn = (itemIncrease) => {
    const newCartList = cartList.map(item => {
      if (itemIncrease.id === item.id) {
        item.quantity++;
      }
      return item
    })
    setCartList(newCartList)
  }

  //Handle Button SUB -
  const subBtn = (itemSub) => {
    const newCartList = cartList.map(item => {
      if (itemSub.id === item.id) {
        item.quantity--;
        if (item.quantity === 0) {
          item.quantity = 1;
        }
      }
      return item
    })
    setCartList(newCartList)
  }

  //Display Notification
  const alertOn = (alertContent, alertStyle) => {
    setAlertShow(true)
    setAlertContent(alertContent)
    setAlertStyle(alertStyle)
  }
  const alertOff = () => {
    setAlertShow(false)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav cartList={cartList} />
        <AlertInfo
          alertShow={alertShow}
          alertOff={alertOff}
          alertContent={alertContent}
          alertStyle={alertStyle}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/" element={<Products
            addCartItem={addCartItem}
          />} />
          <Route path="/about/" element={<About />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="//cart/:slug.:id.html" element={<ProductItemDetail
            addCartItem={addCartItem}
            cartList={cartList}
            addBtn={addBtn}
            subBtn={subBtn} />}
          />
          <Route path="/cart/" element={
            <Cart
              cartList={cartList}
              deleteCartItem={deleteCartItem}
              addBtn={addBtn}
              subBtn={subBtn}
            />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
