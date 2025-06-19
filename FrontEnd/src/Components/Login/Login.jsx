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
import API_URL from "../../Utility/CommomUtility";
import bg from "./bg.jpg";
function Login() {
  console.log(API_URL);

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    reset,
  } = useForm();
  // const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const onSubmit = async (fromData) => {
    const { email, password } = fromData;
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
        toast.error(result.message);
        reset({}, { keepValues: true });
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
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 0, sm: 0, md: 0 }}
        sx={{ height: "100vh" }}
      >
        <Grid
          size={6}
          sx={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          
        </Grid>
        <Grid size={6}>
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
                height: "100%",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                boxShadow: "0 0 4px 1px rgba(0,0,0,0.2)",
                p: 3,
                borderRadius: 0,
              }}
              component="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Typography variant="h5">Welcome</Typography>
              <TextField
                label="Email"
                size="small"
                type="text"
                // value={userDetails.email}
                // fullWidth
                sx={{ width: "50%" }}
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
                sx={{ width: "50%" }}
                // fullWidth
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
                sx={{
                  py: 1,
                  width: "50%",
                  background: "black",

                  //  background: 'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))'
                }}
                fullWidth
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <CircularProgress variant="indeterminate" value={60} />{" "}
                    Logging in...
                  </Stack>
                ) : (
                  "Login"
                )}
              </Button>
              <Stack display={"flex"} direction={"row"} spacing={12}>
                <Typography>No account </Typography>
                <Typography
                  component={Link}
                  to="/Signup"
                  variant="body2"
                  color="primary"
                  sx={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  Create Account
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
