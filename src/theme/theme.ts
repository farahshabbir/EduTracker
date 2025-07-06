import type { PaletteColor, PaletteColorOptions } from "@mui/material/styles";

// Extend the default MUI Palette types to include standalone colors
interface TypeBorder {
  main: string;
  secondary: string;
  primary: string;
  neutral: string;
  // light: string;
  // dark: string;
}
interface TypeHover {
  main: string;
  secondary: string;
}
interface TypeIcon {
  default: string;
  muted: string;
  light: string;
}

declare module "@mui/material/styles" {
  interface TypeBackground {
    input?: string;
    label?: string;
    secondary?: string;
    primaryLight?: string;
  }

  interface TypeText {
   // darkGray: string;
  }

  interface TypeHeading {
    primary: string;
    secondary: string;
    base: string;
  }

  interface Palette {
    alert: PaletteColor;
    border: TypeBorder;
    icon: TypeIcon;
    placeholder: PaletteColor;
    hover: TypeHover;
    heading: TypeHeading;
  }

  interface PaletteOptions {
    alert?: PaletteColorOptions;
    border?: Partial<TypeBorder>;
    hover?: Partial<TypeHover>;
    icon?: Partial<TypeIcon>;
    placeholder?: PaletteColorOptions;
    heading?: Partial<TypeHeading>;
  }
}
