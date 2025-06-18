import { Button, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link ,useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import API_URL from '../../Utility/CommomUtility'
import { useEffect } from "react";

function Signup () {
    const navigate =useNavigate();
    const {register,handleSubmit,formState:{errors,isSubmitSuccessful },reset} =useForm();
    const onSubmit =async(fromData) =>{
        const details = {
            username:fromData.username,
            email:fromData.email,
            password:fromData.password
        }
        try{
            const data =await fetch(`${API_URL}/register`,{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(details)
            });
            const result =await data.json();
            if(!result.ok){
                toast.error(result.message)
                return;
            }
            toast("Signup successfuly")
           navigate('/')
        }catch(e){
        toast.error(e.message)
        }finally{
            // reset()
        }
    }
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
        <Stack display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
            <Stack component={'form'} onSubmit={handleSubmit(onSubmit)} spacing={2} sx={{p: 3,backgroundColor:'white',height:'350px',width:'350px',boxShadow:'0 0 4px 1px rgba(0,0,0,0.3)',borderRadius:4}}>
                <Typography variant="h6" textAlign={'center'}>
                    Welcome to Sign up
                </Typography>
                <TextField {...register('username',{required:'Username is required'})} helperText={errors.username?.message} error={!!errors.username} type="text" size="small" fullWidth label="Username" />
                <TextField {...register('email',{required:'Email is required'})} helperText={errors.email?.message} error={!!errors.email} type="text" size="small" fullWidth label="Email" />
                <TextField {...register('password',{required:'Password is required'})} helperText={errors.password?.message} error={!!errors.password} type="text" size="small" fullWidth label="Password" />
                <Button variant="contained" type="submit" disabled={isSubmitSuccessful}>Signup</Button>
                <Stack display={"flex"} justifyContent={'space-between'} direction={'row'}>
                    <Typography variant="body2" component={'h1'}>Have an account </Typography>
                    <Typography  color="primary" variant="body2" component={Link} to='/' sx={{textDecoration:'underline'}}>Signin </Typography>

                </Stack>

            </Stack>

        </Stack>
        </>
    )
}

export default Signup;