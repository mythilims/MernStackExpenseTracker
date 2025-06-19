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
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import AuthContext from "../Context/AuthContext";
import { useContext } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useEffect } from "react";
import moment from 'moment';
import API_URL from '../../Utility/CommomUtility';

function AddExpenseTracker() {
  const { id } = useParams();
  const navigate =useNavigate();
  const { token, userDetails } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();
  const onSubmit = async (formata) => {
    formata.userId = userDetails.id;
    try {
      let url = id ?`${API_URL}/expense/update/${id}` :`${API_URL}/expense/create`
      let data = await fetch(url, {
        method: id? "PUT":"POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formata),
      });
      let result = await data.json();
      if (!data.ok) {
        toast.error(result.message);
        return;
      }
      toast.success(id ? `Expense Updated success`:`Expense Created success`);
      if(id){
        navigate('/expenselist')
      }
    } catch (e) {
      toast.error(e.message);
    } finally {
      reset();
    }
  };
  useEffect(() => {
    if(!!id){

    
    async function getById() {
      try {
        const data = await fetch(`http://127.0.0.1:8080/expense/${id}`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        let result = await data.json();
        if (!data.ok) {
          toast.error(result.message);
          return;
        }
        result.date =moment(result.date).format('YYYY-MM-DD');
        reset(result);
      } catch (e) {
        toast.error(e.message);
      }
    }
    
    getById();
  }
  }, [id, reset, token]);
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
            variant="h5"
            sx={{
              backgroundColor: "#f5f5f5",
              borderLeft: "2px solid black"              
            }}
          />

          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  label="Name"
                  size="small"
                  sx={{ shrink: true }}
                  fullWidth
                  {...register("name", { required: "Name is Required" })}
                  error={!!errors.name}
                  slotProps={{
                    inputLabel: { shrink: true },
                  }}
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
                  slotProps={{
                    inputLabel: { shrink: true },
                  }}
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
                  slotProps={{
                    inputLabel: { shrink: true },
                  }}
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
                  slotProps={{ inputLabel: { shrink: true } }}
                  // InputLabelProps={{ shrink: true }} // ✅ Correct prop
                  {...register("date", { required: "Date is Required" })}
                  error={!!errors.date}
                  helperText={errors.date?.message}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Notes"
                  size="small"
                  slotProps={{
                    inputLabel: { shrink: true },
                  }}
                  fullWidth
                  {...register("notes")}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Payment Mode"
                  size="small"
                  fullWidth
                  slotProps={{
                    inputLabel: { shrink: true },
                  }}
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
              // color="success"
              sx={{background:'black'}}
              type="submit"
              disabled={isSubmitSuccessful}
            >
              {isSubmitSuccessful ? <CircularProgress /> : id ? "Update" : "Save"}
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
