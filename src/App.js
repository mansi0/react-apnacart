
   import './App.css';
   import Navbar from './components/Navbar';
   import ProductList from './components/ProductList';
   import product from './components/Product'
   import Footer from './components/Footer';
   import React, {useState} from 'react';

   function App() {
       const [productList ,setProductList] = useState([
           {
               price : 9999,
               name: "Iphone 10S",
               quantity : 0

           },
           {
               price : 1499,
               name: "Redmi 10S",
               quantity : 0

           }
       ]);
       {/*let [productList , setProductList] = useState(product)*/}

       const incrementQuantity = (index) =>  {
           let newProductList = [...productList]
           newProductList[index].quantity++
           setProductList(newProductList)
       }

       const decrementQuantity = (index) =>  {
           let newProductList = [...productList]
           if (newProductList[index].quantity > 0) { newProductList[index].quantity-- }
           else {newProductList[index].quantity = 0}
           setProductList(newProductList)
       }
       

       return ( 
        <>
           <Navbar/>
           <main className='container mt-5'>
           <ProductList productList = {productList} incrementQuantity = {incrementQuantity} decrementQuantity = {decrementQuantity}/>
           </main>
           {/*<Footer/>*/}
        
        </>           
       );
   }

   export default App;