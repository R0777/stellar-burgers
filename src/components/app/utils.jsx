
export const addEl = (state, ingredient) => {
  if (ingredient.type === "bun") {
    const newState = { ...state, bun: ingredient };
    return newState;
  } else {
    let newOther = [...state.other, ingredient];
    return { ...state, other: newOther };
  }
};

export const deleteEl = (
  state, index) => {
  if (typeof index !== "undefined") {
    let newOther = [...state.other];
    newOther.splice(index, 1);
    return { ...state, other: newOther };
  } else {
    return { ...state };
  }
};
