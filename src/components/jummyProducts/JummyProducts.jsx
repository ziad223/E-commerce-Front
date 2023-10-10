import { Link } from 'react-router-dom';
import './JummyProducts.css';
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice/CartSlice';

const JummyProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  const dispatch = useDispatch();
  return (
    <div className="products container">
      <h2 className="products-title">Dummy Json Products</h2>
      <div className="products-content">
        {products.map((pro) => {
          return (
            <div className="product" key={pro.id}>
            <img src={pro.thumbnail} alt="product" />
            <h2>{pro.title.slice(0 , 20)}</h2>
            <h3>{pro.category}</h3>
            <h4 className='discount'>{pro.discountPercentage} %</h4>
            <h3>Price : {pro.price} $</h3>
            <button onClick={() => dispatch(addItem(pro))}>Add To Cart</button>
            <Link to={`/jummy/${pro.id}`}>
            <button  className='more-details'>More Details</button>
            </Link>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default JummyProducts;
