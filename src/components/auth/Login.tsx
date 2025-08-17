import { useState } from 'react';
import { Box, Button, TextField, Typography, Stack, Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { routes } from '../../config/routes';

export default function LoginForm() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: '', password: '' });

  return (
    <Box
      component="form"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        navigate(routes.portal.dashboard);
      }}
    >
      <Stack spacing={2}>
        <Box>
          <Typography variant="h5" sx={{ mb: 0.5, color: 'heading.primary' }}>
            Welcome back
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sign in to your admin account
          </Typography>
        </Box>

        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          value={values.email}
          onChange={(e) => setValues((s) => ({ ...s, email: e.target.value }))}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          required
          value={values.password}
          onChange={(e) =>
            setValues((s) => ({ ...s, password: e.target.value }))
          }
        />

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box />
          <Link
            component={RouterLink}
            to={routes.auth.forgetPassword}
            underline="hover"
            color="primary.main"
          >
            Forgot password?
          </Link>
        </Stack>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign in
        </Button>
      </Stack>
    </Box>
  );
}
