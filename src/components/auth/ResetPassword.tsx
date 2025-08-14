// src/features/auth/ResetPasswordForm.tsx
import { useState } from 'react';
import { Box, Button, TextField, Typography, Stack, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '../../config/routes';

export default function ResetPasswordForm() {
  const [values, setValues] = useState({ password: '', confirm: '' });

  return (
    <Box component="form" noValidate onSubmit={(e) => e.preventDefault()}>
      <Stack spacing={2}>
        <Box>
          <Typography variant="h5" sx={{ mb: 0.5, color: 'heading.primary' }}>
            Reset password
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Create a new password for your account
          </Typography>
        </Box>

        <TextField
          label="New password"
          type="password"
          fullWidth
          required
          value={values.password}
          onChange={(e) =>
            setValues((s) => ({ ...s, password: e.target.value }))
          }
        />
        <TextField
          label="Confirm password"
          type="password"
          fullWidth
          required
          value={values.confirm}
          onChange={(e) =>
            setValues((s) => ({ ...s, confirm: e.target.value }))
          }
          error={Boolean(values.confirm) && values.confirm !== values.password}
          helperText={
            Boolean(values.confirm) && values.confirm !== values.password
              ? 'Passwords do not match'
              : ' '
          }
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Set new password
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
