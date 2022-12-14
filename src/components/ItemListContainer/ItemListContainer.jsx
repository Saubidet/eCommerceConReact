import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import { getItems, getItemsByCategory } from "../../services/firestore";
import ItemList from "./ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { cat } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setData([]);
    if (cat === undefined) {
      getItems()
        .then((relojData) => {
          setData(relojData);
        })
        .finally(() => setIsLoading(false));
    } else {
      getItemsByCategory(cat)
        .then((relojesData) => {
          setData(relojesData);
        })
        .finally(() => setIsLoading(false));
    }
  }, [cat]);

  return (
    <>
      <div className="header">
        <h1>{props.greeting}</h1>
      </div>
      <hr />
      {isLoading && <Loader />}
      <div className="content">
        <ItemList data={data} />
      </div>
    </>
  );
}

export default ItemListContainer;