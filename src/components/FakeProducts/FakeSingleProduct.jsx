import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FakeProducts.css";

const FakeSingleProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
     <div className="single-product container">
       <div className="product ">
        <img src={product.image} alt="" />
        <div className="product-details">
          <h2>{product.category}</h2>
          <h3>{product.description}</h3>
          <h2>{product.title}</h2>
          <h2>Price : {product.price} $</h2>
          <button>Add To Cart</button>
        </div>
      </div>
     </div>
  );
};

export default FakeSingleProduct;
