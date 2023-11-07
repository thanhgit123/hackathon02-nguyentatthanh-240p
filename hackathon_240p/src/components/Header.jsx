import React, { useState } from "react";

export default function Header({ data }) {
  const [myMoney, setMoney] = useState(1000000000000);
  const totalPrice = data.reduce((total, product) => {
    return total + product.price * product.count;
  }, 0);
  return (
    <>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "red",
          height: "100px",
          color: "white",
          paddingTop: "5px",
          position:"fixed",
          top:"0",
          width:"100%"
        }}
      >
        <p style={{ fontSize: "20px" }}>Money: ${myMoney - totalPrice} </p>
        <span>
          {totalPrice == 0 ? "Your Money" : "You Have a Lot of Money"}
        </span>
      </div>
    </>
  );
}
