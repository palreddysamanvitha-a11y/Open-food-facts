import axios from "axios";

const compareFoods = async (foods) => {
  const res = await axios.post(
    "http://localhost:5000/api/compare",
    { foods }
  );
  console.log(res.data);
};