import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Stack,
  Grid,
  Paper
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
    <>
   <Grid container spacing={5} py={10}>
    {chartTitles.map((title, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} >

        <Card key={index}>
          <CardHeader title={title}  />
          <CardContent>
            <PieChart
              series={[
                {
                  data: chartData,
                  innerRadius: 40,
                  outerRadius: 80,
                },
              ]}
              width={200}
              height={200}
            />
          </CardContent>
        </Card>
          </Grid>

      ))}
  
</Grid>
    
     </>
  );
}

export default ExpenseDashboard;
