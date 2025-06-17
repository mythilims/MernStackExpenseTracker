import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Stack,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function AddExpenseTracker() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    isSubmitting,
    reset,
  } = useForm();
  const onSubmit = async (formata) => {
    console.log("tedt");

    formata.userI = "";
    try {
      let data = await fetch("http://127.0.0.1:8080/expense/create", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formata),
      });
      let result = await data.json();
      if (!result.ok) {
        toast.error(result.message);
        return;
      }
      toast.success("Expense Created success");
    } catch (e) {
      toast.error(e.message);
    }
  };
  return (
    <Stack
      sx={{
        mt: 2,
        ml: 2,
        mr: 2,
        p: 3,
        minHeight: "calc(100vh - 164px)",
        overflow: "auto",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      <Card>
        <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
          <CardHeader
            title=" Add Expense Tracker"
            variant="h6"
            sx={{
              backgroundColor: "#f5f5f5",
              borderLeft: "2px solid #1976d2",
            }}
          />

          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  label="Name"
                  size="small"
                  fullWidth
                  {...register("name", { required: "Name is Required" })}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Amount"
                  size="small"
                  fullWidth
                  {...register("amount", { required: "Amount is Required" })}
                  error={!!errors.amount}
                  helperText={errors.amount?.message}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Category"
                  size="small"
                  fullWidth
                  {...register("category", {
                    required: "Category is Required",
                  })}
                  error={!!errors.category}
                  helperText={errors.category?.message}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  label="Date"
                  type="date"
                  size="small"
                  fullWidth
                  InputLabelProps={{ shrink: true }} // ✅ Correct prop
                  {...register("date", { required: "Date is Required" })}
                  error={!!errors.date}
                  helperText={errors.date?.message}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Notes"
                  size="small"
                  fullWidth
                  {...register("notes")}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Payment Mode"
                  size="small"
                  fullWidth
                  {...register("paymentMethod", {
                    required: "Name is Payment Mode",
                  })}
                  error={!!errors.paymentMethod}
                  helperText={errors.paymentMethod?.message}
                />
              </Grid>
            </Grid>
          </CardContent>

          <CardActions
            sx={{
              justifyContent: "flex-end",
              pr: 2,
              pb: 2,
              backgroundColor: "#f5f5f5",
            }}
          >
            <Button
              variant="contained"
              color="success"
              type="submit"
              disabled={isSubmitting}
            >
              Save
            </Button>
            <Button variant="contained" color="error" onClick={() => reset()}>
              Reset
            </Button>
          </CardActions>
        </Stack>
      </Card>
    </Stack>
  );
}

export default AddExpenseTracker;
