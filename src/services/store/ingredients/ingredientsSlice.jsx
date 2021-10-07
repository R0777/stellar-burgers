import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import formatDataIngredients from "../../utils/formatDataIngredients";
import { addEl, deleteEl } from "../../../components/App/utils";
import { constructorAPI } from "../../api/constructor";

export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchIngredients",
  async () => {
    try {
      return await constructorAPI.getIngredients();
    } catch (err) {
      console.log(`### err.message`, err.message);
    }
  }
);

export const initialState = {
  ingredients: {
    main: [],
    bun: [],
    sauce: [],
  },
  selectedIngredients: {
    bun: null,
    other: [],
  },
};

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    addSelectedIngredient: (state, action) => {
      state.selectedIngredients = addEl(
        state.selectedIngredients,
        action.payload
      );
    },
    deleteSelectedIngredient: (state, action) => {
      state.selectedIngredients = deleteEl(
        state.selectedIngredients,
        action.payload.index
      );
    },
    changePosition: (state, action) => {
      const { dragIndex, hoverIndex } = action.payload;
      const currentState = current(state);
      let other = [...currentState.selectedIngredients.other];

      const dragEl = other[dragIndex];

      other.splice(dragIndex, 1);
      other.splice(hoverIndex, -1, dragEl);

      state.selectedIngredients = {
        ...currentState.selectedIngredients,
        other: other,
      };
    },
    cleanBasket: (state) => {
      state.selectedIngredients = {
        bun: null,
        other: [],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIngredients.fulfilled, (state, action) => {
      state.ingredients = formatDataIngredients(action.payload);
    });
  },
});

export const {
  addSelectedIngredient,
  deleteSelectedIngredient,
  changePosition,
  cleanBasket,
} = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
