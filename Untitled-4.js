app.get("/api/trending", async (req, res) => {
  const { data, error } = await supabase
    .from("foods")
    .select("*")
    .limit(5);

  res.json(data);
});