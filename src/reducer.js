export const initialState = {
  basket: [],
  user: null,
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "add_to_Basket":
      // logi for adding item to basket
      return { ...state, basket: [...state.basket, action.item] };
    case "remove_from_basket":
      // logi for adding item to basket
      return state;
    default:
      return state;
  }
};

export default reducer;
