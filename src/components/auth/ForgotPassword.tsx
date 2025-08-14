// src/features/auth/ForgotPasswordForm.tsx
import { useState } from 'react';
import { Box, Button, TextField, Typography, Stack, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '../../config/routes';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');

  return (
    <Box component="form" noValidate onSubmit={(e) => e.preventDefault()}>
      <Stack spacing={2}>
        <Box>
          <Typography variant="h5" sx={{ mb: 0.5, color: 'heading.primary' }}>
            Forgot password
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Enter your email to receive a reset link
          </Typography>
        </Box>

        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Send reset link
        </Button>

        <Link
          component={RouterLink}
          to={routes.auth.login}
          underline="hover"
          alignSelf="center"
        >
          Back to login
        </Link>
      </Stack>
    </Box>
  );
}
