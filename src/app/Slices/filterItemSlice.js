import { createSlice } from "@reduxjs/toolkit";
import  {products} from '../../api/product'

const initialState = {
    products: products,
    brands: [],
    price: [],
    rating: [],
};

const filterItemSlice = createSlice({
  name: "filterItem",
  initialState,
  reducers: {
    toggleBrand(state, action) {
      const isFiltered = state.brands.includes(action.payload);

      if (isFiltered) {
        state.brands = state.brands.filter((brand) => brand !== action.payload);
      } else {
        // state.brands.push(action.payload);
         state.brands = [...state.brands, action.payload];
      }

      // Apply filters to products based on selected brands
      if (state.brands.length === 0) {
        // If no brands selected, reset products to the original list
        state.products = products;
      } else {
        // Apply filters based on selected brands
        state.products = products.filter((product) =>
          state.brands.includes(product.brand)
        );
      }
    },
    togglePrice(state, action) {
      const isFiltered = state.price.includes(action.payload);

      if (isFiltered) {
        state.price = state.price.filter((price) => price !== action.payload);
      } else {
        state.price.push(action.payload);
      }

      // Apply filters to products based on selected prices
      if (state.price.length === 0) {
        // If no prices selected, reset products to the original list
        state.products = products;
      } else {
        // Apply filters based on selected prices
        state.products = products.filter((product) => {
          const productPrice = product.price2;

          // Check if productPrice matches any selected price range
          return state.price.some((selectedPrice) => {
            if (selectedPrice === "Under 500") {
              return productPrice <= 500;
            } else if (selectedPrice === "1000 to 3000") {
              return productPrice >= 1000 && productPrice <= 3000;
            }

            // Handle other price ranges if needed

            return false;
          });
        });
      }
    },
  },
});

export default filterItemSlice.reducer;
export const { toggleBrand,togglePrice} = filterItemSlice.actions;