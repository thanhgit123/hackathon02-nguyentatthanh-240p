import React, {useState}  from 'react'
import Header from './components/Header'
import Product from './components/Product'
import Cart from './components/Cart'

export default function App() {
  const[data,setData]=useState([
    {
      id:1,
      name:"Kiếm đầu tiên",
      price: 2000,
      image:"https://i.pinimg.com/736x/28/84/f2/2884f2cdae80be3f0a790b3591e67dff.jpg",
      count:0,
    },
    {
      id:2,
      name:"Dao Dựa",
      price:4000,
      image:"https://i.pinimg.com/736x/28/84/f2/2884f2cdae80be3f0a790b3591e67dff.jpg",
      count:0,
    },
    {
      id:3,
      name:"Kiếm thứ 2",
      price: 6000,
      image:"https://i.pinimg.com/736x/28/84/f2/2884f2cdae80be3f0a790b3591e67dff.jpg",
      count:0,
    },
    {
      id:4,
      name:"Kiếm thiên",
      price: 4000,
      image:"https://i.pinimg.com/736x/28/84/f2/2884f2cdae80be3f0a790b3591e67dff.jpg",
      count:0,
    },
    {
      id:5,
      name:"Dao thái thịt",
      price: 3000,
      image:"https://i.pinimg.com/736x/28/84/f2/2884f2cdae80be3f0a790b3591e67dff.jpg",
      count:0,
    },
    {
      id:6,
      name:"Kiếm đồ chơi",
      price: 1000,
      image:"https://i.pinimg.com/736x/28/84/f2/2884f2cdae80be3f0a790b3591e67dff.jpg",
      count:0,
    },
  ])

  return (
   <>
        <Header data={data}></Header>
        <Product data={data} setData={setData}></Product>
        <Cart data={data} setData={setData}></Cart>
   </>  
  )
}
