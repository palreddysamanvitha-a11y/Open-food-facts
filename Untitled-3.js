app.post("/api/foods", async (req, res) => {
  const food = req.body;

  const { data, error } = await supabase
    .from("foods")
    .insert([food]);

  if (error) return res.status(500).json(error);

  res.json(data);
});