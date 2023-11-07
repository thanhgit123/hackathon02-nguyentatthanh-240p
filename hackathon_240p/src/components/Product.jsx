import React, { useState } from "react";
import uuid from "react-uuid";
export default function Product({ data, setData }) {
  const handleChangeCount = (id, status) => {
    const newProducts = [...data];
    const index = newProducts.findIndex((product) => product.id == id);
    switch (status) {
      case 0:
        if (newProducts[index].count > 0) {
          newProducts[index].count -= 1;
        }
        break;
      case 1:
        newProducts[index].count += 1;
        break;
    }
    setData(newProducts);
  };

  return (
    <>
      <div
        style={{
          marginTop: "150px",
          display: "grid ",
          gridTemplateColumns: "auto auto auto",
          marginLeft: "150px",
        }}
      >
        {data.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.image} alt="" style={{ width: "300px" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "300px",
                }}
              >
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "300px",
                }}
              >
                <button
                  style={{ height: "30px", width: "100px" }}
                  onClick={() => handleChangeCount(item.id, 0)}
                >
                  Interest
                </button>
                <span>{item.count}</span>
                <button
                  style={{ height: "30px", width: "100px" }}
                  onClick={() => handleChangeCount(item.id, 1)}
                >
                  Add
                </button>
              </div>
              <br />
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
}
