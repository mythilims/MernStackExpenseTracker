import { Button, Stack, TextField, Typography, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API_URL from "../../Utility/CommomUtility";
import { useEffect } from "react";
import bg from "./bg.jpg";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();
  const onSubmit = async (fromData) => {
    const details = {
      username: fromData.username,
      email: fromData.email,
      password: fromData.password,
    };
    try {
      const data = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(details),
      });
      const result = await data.json();
      if (!data.ok) {
        toast.error(result.message);
        return;
      }

      let detail = JSON.stringify({
        name: result.userDetails.username,
        email: result.userDetails.email,
        id: result.userDetails._id,
      });
      toast.success(result.message);
      //   login(result.token, detail,'SignUp');
      navigate("/");
    } catch (e) {
      toast.error(e.message);
    } finally {
      // reset()
    }
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(undefined, {
        keepValues: true,
        keepErrors: false,
        keepDirty: false,
        keepIsSubmitted: false,
        keepTouched: false,
        keepIsValid: false,
      });
    }
  }, [isSubmitSuccessful]);

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
        ></Grid>
        <Grid size={6}>
          <Stack
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"100vh"}
          >
            <Stack
              component={"form"}
              onSubmit={handleSubmit(onSubmit)}
              spacing={2}
              sx={{
                height: "100%",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                // boxShadow: "0 0 4px 1px rgba(0,0,0,0.2)",
                boxShadow: "0 0 0 5px 1px rgba(0,0,0,0.2)",
                backgroundColor: "#f2e2e5",
                p: 3,
                borderRadius: 0,
              }}
            >
              <Typography variant="h6"  sx={{fontWeight:'bold' ,fontSize:'23px'}}>Welcome to Sign up</Typography>
              <TextField
                {...register("username", { required: "Username is required" })}
                helperText={errors.username?.message}
                error={!!errors.username}
                type="text"
                size="small"
                sx={{
                  width: "50%",
                   '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray', // default
      },
      '&:hover fieldset': {
        borderColor: 'black', // on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'gray', // on focus ✅
        // borderWidth: '2px',
      },
    },
                }}
                // fullWidth
                label="Username"
              />
              <TextField
                {...register("email", { required: "Email is required" })}
                helperText={errors.email?.message}
                error={!!errors.email}
                type="text"
                size="small"
                // fullWidth
                sx={{ width: "50%" }}
                label="Email"
              />
              <TextField
                {...register("password", { required: "Password is required" })}
                helperText={errors.password?.message}
                error={!!errors.password}
                type="text"
                size="small"
                // fullWidth
                sx={{ width: "50%" }}
                label="Password"
              />
              <Button
                variant="contained"
                type="submit"
                sx={{ width: "50%", backgroundColor: "black" }}
                disabled={isSubmitSuccessful}
              >
                Signup
              </Button>
              <Stack display={"flex"} direction={"row"} spacing={12}>
                <Typography variant="body2" component={"h1"}>
                  Have an account{" "}
                </Typography>
                <Typography
                  color="primary"
                  variant="body2"
                  component={Link}
                  to="/"
                  sx={{ textDecoration: "underline" }}
                >
                  Signin{" "}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default Signup;
