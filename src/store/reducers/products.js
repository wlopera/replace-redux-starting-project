import { TOGGLE_FAV } from "../actions/products";

const initialState = {
  products: [
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
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      const prodIndex = state.products.findIndex(
        (p) => p.id === action.productId
      );
      const newFavStatus = !state.products[prodIndex].isFavorite;
      const updatedProducts = [...state.products];
      updatedProducts[prodIndex] = {
        ...state.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return {
        ...state,
        products: updatedProducts,
      };
    default:
      return state;
  }
};

export default productReducer;
