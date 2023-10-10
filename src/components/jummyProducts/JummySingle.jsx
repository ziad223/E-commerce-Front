import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../../store/cartSlice/CartSlice";

const JummySingle = () => {
  const [product, setProduct] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="single-jummy container">
      <img src={product.thumbnail} alt="thumbnail" />
      <div className="single-jummy-details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>{product.category}</h3>
        <p className="discount">{product.discountPercentage} %</p>
        <h3>Price : {product.price} $</h3>
        <button onClick={() => dispatch(addItem(product))}>Add To Cart</button>
      </div>
    </div>
  )
};

export default JummySingle;
