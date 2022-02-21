
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import React, { useState } from 'react';
import AddItem from './components/addItem';

function App() {
    const [productList, setProductList] = useState([
        {
            price: 9999,
            name: "Iphone 10S",
            quantity: 0

        },
        {
            price: 1499,
            name: "Redmi 10S",
            quantity: 0

        }
    ]);

    let [totalAmount, setTotalAmount] = useState(0);

    const incrementQuantity = (index) => {
        let newProductList = [...productList]
        let newTotalAmount = totalAmount;
        newProductList[index].quantity++
        newTotalAmount += newProductList[index].price
        setTotalAmount(newTotalAmount);
        setProductList(newProductList)
    }

    const decrementQuantity = (index) => {
        let newProductList = [...productList]
        let newTotalAmount = totalAmount;
        if (newProductList[index].quantity > 0) {
            newProductList[index].quantity--
            newTotalAmount -= newProductList[index].price;
            setTotalAmount(newTotalAmount);
        }
        else { newProductList[index].quantity = 0 }
        setProductList(newProductList)
    }
    const resetQuantity = () => {
        let newProductList = [...productList]
        // eslint-disable-next-line array-callback-return
        newProductList.map((products) => {
            products.quantity = 0
        })
        setProductList(newProductList);
        setTotalAmount(0);
    }

    const removeItem = (index) => {
        let newProductList = [...productList]
        let newTotalAmount = totalAmount;
        newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
        newProductList.splice(index, 1);
        console.log(newProductList)
        setProductList(newProductList);
        setTotalAmount(newTotalAmount)
    }

    const addItem = (name, price) => {
        let newProductList = [...productList]
        newProductList.push({
            price: price,
            name : name,
            quantity : 0});
            setProductList(newProductList)
    }
    return (
        <>
            <Navbar />
            <main className='container mt-5'>
                <AddItem addItem={addItem} />
                <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem} />
            </main>
            <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />

        </>
    );
}

export default App;