import { PieChart, Pie, Cell } from "recharts";

export default function Chart({ data }) {
  return (
    <PieChart width={200} height={200}>
      <Pie data={data} dataKey="value" outerRadius={80} />
    </PieChart>
  );
}