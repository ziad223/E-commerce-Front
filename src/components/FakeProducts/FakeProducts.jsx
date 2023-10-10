import { Link } from "react-router-dom";
import "./FakeProducts.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, selectedItem } from "../../store/cartSlice/CartSlice";


const FakeProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const dispatch = useDispatch();
  return (
    <div className="products container">
      <h2 className="products-title">Fake Api Products</h2>
      <div className="products-content">
        {products.slice(0, 18).map((pro) => {
          return (
            <div className="product" key={pro.id}>
              <img src={pro.image} alt="product" />
              <h2>{pro.title.slice(0, 20)}</h2>
              <h3>{pro.category}</h3>
              <h3>Price : {pro.price} $</h3>
              <button onClick={() =>dispatch(addItem(pro))}>Add To Cart</button>

              <Link to={`/fake/${pro.id}`}>
                <button className="fake-link">More Details</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FakeProducts;
