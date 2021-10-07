
export const findIngredient = ( ingredients, id) => {
  let ingredient;
  for (let key in ingredients) {
    if (!ingredient) {
      const arrayIng = ingredients[key];
      ingredient = arrayIng.find((item) => item._id === id);
    }
  }
  return ingredient;
};
