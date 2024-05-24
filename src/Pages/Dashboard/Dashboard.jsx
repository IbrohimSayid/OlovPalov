import React, { useState } from "react";
import './Dashboard.css';

function Dashboard() {
  const [product, setProduct] = useState({
    productName: "",
    productCategory: "",
    productPrice: "",
    productImg: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    setProduct({
      productName: "",
      productCategory: "",
      productPrice: "",
      productImg: "",
      description: "",
    });
  };

  return (
    <>
      <div className="prductsFrom">
        <h2>Create Products</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Product Name:</label>
            <input
              type="text"
              name="productName"
              value={product.productName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Product Category:</label>
            <select
              name="productCategory"
              value={product.productCategory}
              onChange={handleChange}
            >
              <option value="" className="option">Tanlang...</option>
              <option value="Qimmat" className="option">Tezkor</option>
              <option value="Sifatli" className="option">Sifatli</option>
              <option value="Hashamatli" className="option">Hashamatli</option>
            </select>
          </div>
          <div>
            <label>Product Price:</label>
            <input
              type="number"
              name="productPrice"
              value={product.productPrice}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Product Img (URL):</label>
            <input
              type="text"
              name="productImg"
              value={product.productImg}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="dashboardBtn">Create</button>
        </form>
      </div>
    </>
  );
}

export default Dashboard;
