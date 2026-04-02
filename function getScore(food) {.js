function getScore(food) {
  return (
    (100 - food.sugar) +
    (100 - food.fat) +
    food.protein * 2 +
    food.fiber * 2
  );
}

app.post("/api/compare", (req, res) => {
  const foods = req.body.foods;

  const scored = foods.map(f => ({
    ...f,
    score: getScore(f)
  }));

  scored.sort((a, b) => b.score - a.score);

  const best = scored[0];

  res.json({
    compared: scored,
    best,
    insights: {
      pros: ["Lower sugar", "Higher protein"],
      cons: ["Slightly higher fat"],
      why: "Better balance of nutrients",
      benefits: [
        "Supports muscle growth",
        "Improves digestion",
        "Stable energy levels"
      ],
      funFact: best.funFact || "Healthy food improves overall well-being!"
    }
  });
});