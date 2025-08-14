import { Box } from '@mui/material';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ThemeShowcase from './theme/ThemeShowcase';
import { routes } from './config/routes';
import ResultCardPreview from './components/testers/ResultCardPreview';
import AuthLayout from './layout/AuthLayout';
import LoginForm from './components/auth/Login';
import ForgotPasswordForm from './components/auth/ForgotPassword';
import ResetPasswordForm from './components/auth/ResetPassword';

function App() {
  return (
    <Box sx={{ height: '100%' }}>
      <Routes>
        <Route path={routes.home} element={<h1>Education Tracker System</h1>} />
        <Route path="theme" element={<ThemeShowcase />} />
        <Route path="preview" element={<ResultCardPreview />} />

        {/* Auth Module */}
        <Route element={<AuthLayout />}>
          <Route path={routes.auth.login} element={<LoginForm />} />
          <Route
            path={routes.auth.forgetPassword}
            element={<ForgotPasswordForm />}
          />
          <Route
            path={routes.auth.resetPassword}
            element={<ResetPasswordForm />}
          />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
