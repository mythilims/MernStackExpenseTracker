import { Link, useNavigate } from "react-router-dom";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

function Login() {
  const navigate =useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const onSubmit = async (fromData) => {
    console.log(fromData);
    console.log(errors);

    const { email, password } = fromData;
    console.log("am a event");
    const details = {
      email,
      password,
    };
          navigate('/ExpenseDashboard');

    try {
      const data = await fetch("http://127.0.0.1:8080/login", {
        method: "POST",
        header: {},
        body: JSON.stringify(details),
      });
      const result = await data.json();
      if (!result.ok) {
        toast.error(result.message);
        return;
      }
      toast.success(result.message);
    } catch (e) {
      console.log("❌ Fetch Error:", e.message);
      toast.warn(e.message);
      //  throw new Error(e)
    }
  };
  return (
    <Stack
      display="flex"
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      // sx={{    background:  "linear-gradient(to right,rgb(153, 153, 17),rgb(233, 239, 56))",}}
    >
      <Stack
        spacing={2}
        sx={{
          height: "350px",
          width: "350px",
          backgroundColor:'white',
          boxShadow: "0 0 4px 1px rgba(0,0,0,0.2)",
          p: 3,
          borderRadius: 4,
        }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography variant="h5" textAlign="center">
          Welcome
        </Typography>
        <TextField
          label="Email"
          size="small"
          type="text"
          // value={userDetails.email}
          fullWidth
          {...register("email", { required:"Email is required" })}
          helperText={errors?.email?.message}
          error={!!errors.email}

          // onChange={(e) =>
          //   setUserDetails({ ...userDetails, email: e.target.value })
          // }
        />
        <TextField
          label="Password"
          type="password"
          size="small"
          fullWidth
          {...register("password", { required:"Password is required" })}
          error={!!errors.password}
          helperText={errors.password?.message}

          // value={userDetails.password}
          // onChange={(e) =>
          //   setUserDetails({ ...userDetails, password: e.target.value })
          // }
        />
        <Stack display="flex" direction="row" justifyContent="space-between">
          <Typography>Remember me</Typography>
          <Typography>Forget Password</Typography>
        </Stack>
        <Button
          type="submit"
          variant="contained"
          size="small"
          sx={{ py: 1 }}
          fullWidth
        >
          Login
        </Button>
        <Stack
          display={"flex"}
          direction={"row"}
          justifyContent="space-between"
        >
          <Typography>No account </Typography>
          <Typography
            component={Link}
            to="/Signup"
            variant="body2"
            color="primary"
            sx={{ textDecoration: "underline", cursor: "pointer", mt: 1 }}
          >
            Create Account
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Login;
