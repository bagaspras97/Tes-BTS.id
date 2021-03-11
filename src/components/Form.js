import React, { useState } from 'react';
import axios from 'axios';
import { Paper, makeStyles, FormControl, Button, TextField } from '@material-ui/core';

const Form = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPasword] = useState('');

  const useStyles = makeStyles((theme) => ({
    pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
    },
  }));

  const register = (e) => {
    e.preventDefault();
    const data = { email, username, password };
    console.log(data);
    axios
      .post('http://18.139.50.74:8080/v2/api-docs/register', {
        data,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const classes = useStyles();
  return (
    <Paper className={classes.pageContent}>
      <FormControl>
        <TextField className="text-field" type="email" variant="outlined" label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField className="text-field" type="text" variant="outlined" label="Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <TextField className="text-field" type="text" variant="outlined" label="Password" name="password" value={password} onChange={(e) => setPasword(e.target.value)} />
        <Button className="btn" color="primary" variant="contained" onClick={register}>
          Register
        </Button>
        <Button className="btn" color="default" variant="contained">
          Login
        </Button>
      </FormControl>
    </Paper>
  );
};

export default Form;
