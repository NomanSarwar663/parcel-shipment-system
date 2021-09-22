import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core';

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { validateUsers } from 'src/store/action';
var jwt = require('jsonwebtoken');

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: "150px",
    backgroundColor: "white",
    zIndex: 2
  },
});


const Login = () => {

  const classes = useStyles();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  const state = useSelector(state => state);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const id =  state.profiles.find((u) => { return (u.email == email) });
  console.log(id);

  toast.configure()





  


  let user = {
    email,
    password
  }
  
  var token = jwt.sign({ email: user.email, id: id }, 'shhhhh');
  console.log(token);

  function moveTO(event) {

    event.preventDefault()

    
    

    if (dispatch(validateUsers(user,navigate))) {
      navigate('/app/dashboard', { replace: true });
      localStorage.setItem("token", token)
    }
    else {
      toast.error("Enter valid email or password",{position:toast.POSITION.BOTTOM_CENTER});
    }

    
    
   

  }

  return (
    <>
      <Helmet>
        <title>Login | Material Kit</title>
      </Helmet>

      <Container style={{display: "flex", justifyContent: "center", textAlign: "center"}}>

        <Card className={classes.root}>

          <Box
            sx={{
              // backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'center',
        
            }}
          >
            <Container maxWidth="sm">
            <form onSubmit={moveTO}>
                    <Box style={{ display: 'flex', justifyContent: "center", marginBottom: "20px", marginTop: "20px" }}>
                      <img width="250px" src="static/images/avatars/logo.png" />
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        color="textPrimary"
                        variant="h4"
                        paddingLeft="10px"
                      >
                        Sign in
                      </Typography>

                    </Box>
                    <Grid
                      container
                      spacing={3}
                    >


                    </Grid>

                    <TextField
                      // error={Boolean(touched.email && errors.email)}
                      fullWidth
                      // helperText={touched.email && errors.email}
                      label="Email Address"
                      margin="normal"
                      name="email"
                      // onBlur={handleBlur}
                      onChange={(e) => { setEmail(e.target.value)}}
                      type="email"
                      value={email}
                      variant="outlined"
                    />
                    <TextField
                      // error={Boolean(touched.password && errors.password)}
                      fullWidth
                      // helperText={touched.password && errors.password}
                      label="Password"
                      margin="normal"
                      name="password"
                      // onBlur={handleBlur}
                      onChange={(e) => { setPassword(e.target.value)}}
                      type="password"
                      value={password}
                      variant="outlined"
                    />
                    <Box sx={{ py: 2 }}>
                      <Button
                        color="primary"
                        // disabled={isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        type='submit'
                      >
                        Sign in now
                      </Button>
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "end" ,marginBottom: "15px"}}>
                    
                      <Link component={RouterLink}  to="/forget" variant="h6" underline="hover">
                        Forget Password?
                      </Link>
                    </Box>

                  </form>
            </Container>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default Login;
