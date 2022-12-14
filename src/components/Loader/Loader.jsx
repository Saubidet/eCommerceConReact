import React from "react";
import { Ring } from "@uiball/loaders";

function Loader() {
  return (
    <>
      <h3>Cargando</h3>
      <Ring size={40} lineWeight={5} speed={3} />
    </>
  );
}

export default Loader;