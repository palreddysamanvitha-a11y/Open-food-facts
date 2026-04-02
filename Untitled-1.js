app.get("/api/recipes", async (req, res) => {
  const query = req.query.q;

  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch`,
      {
        params: {
          query,
          number: 10,
          apiKey: SPOON_KEY,
          addRecipeNutrition: true
        }
      }
    );

    res.json(response.data.results);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});