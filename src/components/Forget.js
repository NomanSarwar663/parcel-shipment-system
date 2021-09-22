import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
import Forget from 'src/components/Forget';
import zIndex from '@material-ui/core/styles/zIndex';

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

  function moveTO() { }

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
              <Formik
                initialValues={{
                  email: 'demo@devias.io',
                  password: 'Password123'
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                  password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={() => {
                  navigate('/app/dashboard', { replace: true });
                }}
              >
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  touched,
                  values
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Box style={{ display: 'flex', justifyContent: "center", marginBottom: "20px", marginTop: "20px" }}>
                      <img width="250px" src="static/images/avatars/logo.png" />
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        color="textPrimary"
                        variant="h4"
                        paddingLeft="10px"
                      >
                        Recovery Password
                      </Typography>

                    </Box>
                    <Grid
                      container
                      spacing={3}
                    >


                    </Grid>

                    <TextField
                      error={Boolean(touched.email && errors.email)}
                      fullWidth
                      helperText={touched.email && errors.email}
                      label="Email Address"
                      margin="normal"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="email"
                      value={values.email}
                      variant="outlined"
                      style={{width: "500px"}}
                    />
                    
                    <Box sx={{ py: 2 }}>
                      <Button
                        color="primary"
                        disabled={isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        onClick={moveTO}
                        style={{marginBottom: "10pxx"}}
                      >
                        Recovery Password
                      </Button>
                    </Box>

                  </form>
                )}
              </Formik>
            </Container>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default Login;
