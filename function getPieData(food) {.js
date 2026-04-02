function getPieData(food) {
  return [
    { name: "Carbs", value: food.carbs },
    { name: "Protein", value: food.protein },
    { name: "Fat", value: food.fat },
    { name: "Fiber", value: food.fiber }
  ];
}