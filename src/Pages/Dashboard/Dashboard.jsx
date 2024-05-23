import React, { useState } from "react";

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
      <h2>Product Yuklovchi Admin Panel</h2>
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
            <option value="">Tanlang...</option>
            <option value="Qimmat">Qimmat</option>
            <option value="Sifatli">Sifatli</option>
            <option value="Hashamatli">Hashamatli</option>
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
        <button type="submit">Create</button>
      </form>
    </>
  );
}

export default Dashboard;