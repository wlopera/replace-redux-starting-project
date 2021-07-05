import React, { useState } from "react";

export const ProductsContext = React.createContext({
  products: [],
});

export default (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Bufanda Roja",
      description: "Una preciosa bufanda roja.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Franela Azul",
      description: "Una preciosa franela roja.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Pantalones Verdes",
      description: "Un par de pantalones verde claro.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Sombrero Naranja",
      description: "¡Estilo callejero! Un sombrero naranja.",
      isFavorite: false,
    },
  ]);

  return (
    <ProductsContext.Provider value={{ products: productsList }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
