import React from "react";

export default function Cart({ data, setData }) {
  const totalPrice = data.reduce((total, prouct) => {
    return total + prouct.price * prouct.count;
  }, 0);

  const data1 = data.filter((prouct) => prouct.count != 0);

  const handleReset = () => {
    const newProducts = data.map((product) => {
      return {
        ...product,
        count: 0,
      };
    });
    setData(newProducts);
  };
  return (
    <>
      <div style={{width:"500px",marginLeft:"150px",border:"1px solid black"}}>
        <div style={{marginLeft:"10px",height:"400px"}}>
          <h3>Cart</h3>
          <div>
            {data1.map((item) => (
              <div>
                <span>{item.name}:</span>
                <span>{item.count}</span>
              </div>
            ))}
          </div>
          <div>
            <div>
              <b>Total: ${totalPrice}</b>
            </div>
            <div>
              <button onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
