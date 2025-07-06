import type { ReactNode } from "react";
import { createTheme, CssBaseline, darken, ThemeProvider } from "@mui/material";
import { createContext, useEffect, useState } from "react";
import { readFromLocalStorage, writeToLocalStorage } from "../utils/localStorageMethods";


// Define Theme Context Interface
type ThemeContextType = {
  isDarkMode: boolean;
  toogleTheme: (mode: string) => void;
};

// Create Context
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    readFromLocalStorage("theme") === "dark",
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      writeToLocalStorage("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      writeToLocalStorage("theme", "light");
    }
  }, [isDarkMode]);

  const toogleTheme = (mode: string) => {
    setIsDarkMode(mode === "dark");
  };

  // Create MUI Theme
  //To Do: Adjust theme for my application --- its a sample theme
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      background: {
        default: isDarkMode ? "#1e1e1e" : "#f7f7f7",
        paper: isDarkMode ? "#2f2f2f" : "#FFFFFF",
        primaryLight: isDarkMode ? "#121212" : "#E0F7FA",
        secondary: isDarkMode ? "#2f2f2f" : "#f1f5f9",
        input: isDarkMode ? "#1e1e1e" : "#FDFDFD",
        label: isDarkMode ? "#5a5a5a" : "#EAECF0",
      },
      primary: {
        main: "#10baac",
        light: "#10BAAC14",
      },
      secondary: {
        main: "#f1f5f9",
      },
      info: {
        main: isDarkMode ? "#08496d" : "#08496d",
      },
      warning: {
        main: "#fb3640",
      },
      error: {
        main: "#dc3545",
      },
      success: {
        main: "#28a745",
      },
      text: {
        primary: isDarkMode ? "#ffffff" : "#545658",
        secondary: isDarkMode ? "#e2e8f0" : "#6c757d",
        //inout color
        //disable color
      },
      heading: {
        primary: isDarkMode ? "#ffffff" : "#262728",
        secondary: isDarkMode ? "#CBD5E1" : "#101828",
        base: isDarkMode ? "#F8FAFC" : "#0C0C0C",
      },
      alert: {
        main: "#ff9900",
      },
      hover: {
        main: "#0e9889",
        secondary: "#e2e8f0",
      },
      border: {
        main: "#ebebeb",
        primary: "#CBD5E1",
        secondary: "#F1F5F9",
        neutral: "#D2D2D2",
      },
      icon: {
        default: "#64748b",
        muted: isDarkMode ? "#D1D5DB" : "#667085",
        light: "#5F6368",
      },
      placeholder: {
        main: "#9d9aa1",
      },
 
    },

    typography: {
      fontFamily: '"Merriweather", sans-serif',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ul: {
            listStyleType: "disc",
            paddingLeft: "1.5rem",
          },
          ol: {
            listStyleType: "decimal",
            paddingLeft: "1.5rem",
          },
          li: {
            display: "list-item",
          },
          a: {
            color: "#10baac",
            textDecoration: "underline",
            wordBreak: "break-word",
            "&:hover": {
              textDecoration: "none",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none",
            fontWeight: "bold",
            paddingLeft: 16,
            paddingRight: 16,
          },
          containedSecondary: {},
          containedPrimary: {
            color: "#fff",
          },
          outlinedPrimary: ({ theme }) => ({
            backgroundColor: theme.palette.primary.light,
            "&:hover": {
              backgroundColor: darken(theme.palette.primary.light, 0.3),
            },
          }),
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            whiteSpace: "normal",
            wordBreak: "break-word",
          },

          h1: ({ theme }) => ({
            color: theme.palette.heading.primary,
            fontWeight: "bold",
          }),
          h2: ({ theme }) => ({
            color: theme.palette.heading.primary,
            fontWeight: "bold",
          }),
          h3: ({ theme }) => ({
            color: theme.palette.heading.primary,
            fontWeight: "bold",
          }),
          h4: ({ theme }) => ({
            color: theme.palette.heading.primary,
            fontWeight: "bold",
          }),
          h5: ({ theme }) => ({
            color: theme.palette.heading.primary,
            fontWeight: "bold",
          }),
          h6: ({ theme }) => ({
            color: theme.palette.heading.primary,
            fontWeight: "bold",
          }),
          body1: {
            color: "#545658",
          },
          body2: {
            color: "#6c757d",
          },
        },
      },
    },
  });
  return (
    <ThemeContext value={{ isDarkMode, toogleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext>
  );
};
