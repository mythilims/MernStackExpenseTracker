import { Link, useNavigate } from "react-router-dom";

import {
  Button,
  CircularProgress,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
// import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import AuthContext from "../Context/AuthContext";
import { useContext } from "react";
import API_URL from '../../Utility/CommomUtility'

function Login() {
  console.log(API_URL);
  
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful,isSubmitting },
    reset,
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

    try {
      const data = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(details),
      });
      const result = await data.json();
      if (!result.passWrdVerify) {
        formState.isSubmitSuccessful=false;
        toast.error(result.message);
        return;
      }
      localStorage.setItem("token", result.token);
      let detail = JSON.stringify({
        name: result.userDetails.username,
        email: result.userDetails.email,
        id: result.userDetails._id,
      });
      localStorage.setItem("userDetails", detail);
      toast.success(result.message);
      login(result.token, detail);
      navigate("/ExpenseDashboard");
    } catch (e) {
      console.log("❌ Fetch Error:", e.message);
      // reset();
      toast.warn(e.message);
      //  throw new Error(e)
    }
  };
  return (
    <>
      <Stack
        display="flex"
        direction="row"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        // sx={{
        //   background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        // }}
      >
        <Stack
          spacing={2}
          sx={{
            height: "350px",
            width: "350px",
            backgroundColor: "white",
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
            {...register("email", { required: "Email is required" })}
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
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message}

            // value={userDetails.password}
            // onChange={(e) =>
            //   setUserDetails({ ...userDetails, password: e.target.value })
            // }
          />
          {/* <Stack display="flex" direction="row" justifyContent="space-between">
            <Typography>Remember me</Typography>
            <Typography>Forget Password</Typography>
          </Stack> */}
          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{ py: 1 }}
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitSuccessful ? (
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <CircularProgress variant="indeterminate" value={60} /> Logging
                in...
              </Stack>
            ) : (
              "Login"
            )}
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
    </>
  );
}

export default Login;
