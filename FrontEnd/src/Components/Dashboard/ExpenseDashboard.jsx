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
    async function chartData() {
      try {
        let data = await fetch(`${API_URL}/expense/byCateogry`, {
          method: "get",
          headers: {
            "content-type": "application/json",
          },
        });
        const result = await data.json();
        console.log(result);
        setChartData(result);
      } catch (e) {
        console.log(e);
      }
    }
    chartData();
  }, []);
  return (
    <>
      <Stack spacing={2} sx={{ p: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Dashboard
        </Typography>
      </Stack>
      <Stack spacing={2}>
        <Card>
          <CardHeader variant="h1" title="Expense By Category"></CardHeader>
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
            ></PieChart>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
}

export default ExpenseDashboard;
