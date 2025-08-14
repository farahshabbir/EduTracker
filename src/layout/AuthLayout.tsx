import { Box, Paper, Typography, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { appInfo } from '../config/appInfo';

export default function AuthLayout() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        background: `
                        radial-gradient(circle at 20% 80%, ${theme.palette.primary.main}15 0%, transparent 60%),
                        radial-gradient(circle at 80% 20%, ${theme.palette.info.main}08 0%, transparent 60%),
                        radial-gradient(circle at 40% 40%, ${theme.palette.background.accent}40 0%, transparent 70%),
                        linear-gradient(135deg, 
                            ${theme.palette.background.default} 0%, 
                            ${theme.palette.background.primary} 25%,
                            ${theme.palette.background.default} 50%,
                            ${theme.palette.background.secondary} 75%,
                            ${theme.palette.background.default} 100%
                        )
                    `,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `linear-gradient(45deg, ${theme.palette.primary.main}25, transparent)`,
          filter: 'blur(60px)',
          animation: 'float 6s ease-in-out infinite',
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${theme.palette.info.main}20, transparent)`,
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite reverse',
          zIndex: 0,
        },
        // Floating animation keyframes
        '@keyframes float': {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(-20px) rotate(5deg)',
          },
        },
      }}
    >
      {/* Brand header */}
      <Box
        sx={{
          position: 'absolute',
          top: 40,
          left: 40,
          zIndex: 10,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: theme.palette.heading.accent,
            fontWeight: 700,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.info.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 2px 10px rgba(0,0,0,0.1)',
          }}
        >
          {appInfo.appName}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            mt: 0.5,
            opacity: 0.8,
          }}
        >
          {appInfo.tagline}
        </Typography>
      </Box>

      {/* Decorative elements*/}
      <>
        <Box
          sx={{
            position: 'absolute',
            top: '15%',
            left: '8%',
            width: '4px',
            height: '40px',
            background: `linear-gradient(to bottom, ${theme.palette.primary.main}, transparent)`,
            borderRadius: '2px',
            animation: 'pulse 2s ease-in-out infinite',
            '@keyframes pulse': {
              '0%, 100%': { opacity: 0.4 },
              '50%': { opacity: 1 },
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '25%',
            right: '12%',
            width: '60px',
            height: '2px',
            background: `linear-gradient(to right, transparent, ${theme.palette.info.main}, transparent)`,
            borderRadius: '1px',
            animation: 'slideIn 3s ease-in-out infinite',
            '@keyframes slideIn': {
              '0%, 100%': { transform: 'translateX(-10px)', opacity: 0.3 },
              '50%': { transform: 'translateX(10px)', opacity: 1 },
            },
          }}
        />
      </>

      {/* Main form container */}
      <Paper
        elevation={24}
        sx={{
          width: '100%',
          maxWidth: 440,
          p: 6,
          borderRadius: 4,
          backgroundColor: theme.palette.background.paper,
          backdropFilter: 'blur(20px)',
          border: `1px solid ${theme.palette.primary.main}30`,
          position: 'relative',
          zIndex: 5,
          // Ensure all child elements maintain proper stacking
          '& *': {
            position: 'relative',
            zIndex: 'auto',
          },
          // Fix for clickable elements
          '& a, & button, & input, & textarea, & [role="button"]': {
            pointerEvents: 'auto',
            zIndex: 10,
          },
          // Subtle inner glow effect
          boxShadow: `
                            0 25px 50px -12px rgba(0, 0, 0, 0.25),
                            0 0 0 1px ${theme.palette.primary.main}15,
                            inset 0 1px 0 ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.1)'}
                          `,

          // Animated border gradient
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            padding: '2px',
            background: `linear-gradient(135deg, ${theme.palette.primary.main}35, transparent, ${theme.palette.info.main}25)`,
            borderRadius: 'inherit',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'xor',
            WebkitMask:
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            opacity: 0.6,
          },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: `
                                0 32px 64px -12px rgba(0, 0, 0, 0.35),
                                0 0 0 1px ${theme.palette.primary.main}20,
                                inset 0 1px 0 ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.15)'}
                            `,
          },
        }}
      >
        <Outlet />
      </Paper>

      {/* Footer */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            opacity: 0.6,
            fontSize: '0.875rem',
          }}
        >
          © {new Date().getFullYear()} {appInfo.centerName}
        </Typography>
      </Box>
    </Box>
  );
}
