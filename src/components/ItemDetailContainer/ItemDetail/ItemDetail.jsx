import React, { useState, useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../../ItemCount/ItemCount";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { cartContext } from "../../../context/cartContext";

function ItemDetail(props) {
  const [countState, setCountState] = useState(false);
  const { addItem } = useContext(cartContext);
  const toggleCountState = () => {
    setCountState((estado) => !estado);
  };

  function HandleAdd(count) {
    addItem(props, count);
    toggleCountState();
  }
  let info = props.data;

  return (
    <div className="item-detail">
      {info.stock === 0 && <span>SIN STOCK</span>}
      <img
        src={info.img}
        alt={info.brand + " " + info.model + " " }
      />
      <h1>
        {info.brand} {info.model}
      </h1>
      <p>${info.price}</p>
      {!countState ? (
        <ItemCount initial={1} stock={info.stock} onAdd={HandleAdd} />
      ) : (
        <div className="options">
          <Link to="/cart">
            <Button variant="contained">Ver Carrito</Button>
          </Link>
          <Link to="/">
            <Button variant="contained">Seguir Comprando</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;