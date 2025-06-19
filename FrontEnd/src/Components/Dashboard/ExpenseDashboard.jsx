import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Stack,
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";
import API_URL from "../../Utility/CommomUtility";

function ExpenseDashboard() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function fetchChartData() {
      try {
        const res = await fetch(`${API_URL}/expense/byCateogry`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await res.json();
        console.log(result);
        setChartData(result);
      } catch (e) {
        console.error("Failed to fetch chart data", e);
      }
    }

    fetchChartData();
  }, []);

  const chartTitles = [
    "Expense By Category",
    "This Month's Spending",
    "Category-wise Breakdown",
  ];

  return (
    <Stack sx={{ p: 6 }} gap={2} >
      <Typography variant="h5" fontWeight="bold">
        Dashboard
      </Typography>

      {chartTitles.map((title, index) => (
        <Card key={index}>
          <CardHeader title={title} />
          <CardContent>
            <PieChart
              series={[
                {
                  data: chartData,
                  innerRadius: 40,
                  outerRadius: 80,
                },
              ]}
              width={400}
              height={250}
            />
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

export default ExpenseDashboard;
