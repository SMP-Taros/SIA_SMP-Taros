import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

// color design token
export const tokens = (mode) => ({
    ...(mode === 'dark'
        ? {
            grey: {
                100: "#e0e0e0",
                200: "#c2c2c2",
                300: "#a3a3a3",
                400: "#858585",
                500: "#666666",
                600: "#525252",
                700: "#3d3d3d",
                800: "#292929",
                900: "#141414"
            },
            primary: {
                100: "#d1d3d4",
                200: "#a3a7a8",
                300: "#767a7d",
                400: "#484e51",
                500: "#1a2226",
                600: "#151b1e",
                700: "#101417",
                800: "#0a0e0f",
                900: "#050708"
            },
            greenAccent: {
                100: "#dbf0e5",
                200: "#b7e2cb",
                300: "#93d3b0",
                400: "#6fc596",
                500: "#4bb67c",
                600: "#3c9263",
                700: "#2d6d4a",
                800: "#1e4932",
                900: "#0f2419"
            },
            redAccent: {
                100: "#fbd6d1",
                200: "#f6ada3",
                300: "#f28476",
                400: "#ed5b48",
                500: "#e9321a",
                600: "#ba2815",
                700: "#8c1e10",
                800: "#5d140a",
                900: "#2f0a05"
            },
            blueAccent: {
                100: "#cce7f9",
                200: "#99cff3",
                300: "#66b8ec",
                400: "#33a0e6",
                500: "#0088e0",
                600: "#006db3",
                700: "#005286",
                800: "#00365a",
                900: "#001b2d"
            },
        }
    : {
        grey: {
            100: "#141414",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0"
        },
        primary: {
            100: "#050708",
            200: "#0a0e0f",
            300: "#101417",
            400: "#f2f0f0",
            500: "#1a2226",
            600: "#484e51",
            700: "#767a7d",
            800: "#a3a7a8",
            900: "#d1d3d4"
        },
        greenAccent: {
            100: "#0f2419",
            200: "#1e4932",
            300: "#2d6d4a",
            400: "#3c9263",
            500: "#4bb67c",
            600: "#6fc596",
            700: "#93d3b0",
            800: "#b7e2cb",
            900: "#dbf0e5"
        },
        redAccent: {
            100: "#2f0a05",
            200: "#5d140a",
            300: "#8c1e10",
            400: "#ba2815",
            500: "#e9321a",
            600: "#ed5b48",
            700: "#f28476",
            800: "#f6ada3",
            900: "#fbd6d1"
        },
        blueAccent: {
            100: "#001b2d",
            200: "#00365a",
            300: "#005286",
            400: "#006db3",
            500: "#0088e0",
            600: "#33a0e6",
            700: "#66b8ec",
            800: "#99cff3",
            900: "#cce7f9"
        },
    })
});


// mui theme setting
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
            ? {
                primary: {
                    main: colors.primary[500],
                },
                secondary: {
                    main: colors.greenAccent[500],
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100]
                },
                background: {
                    default: colors.primary[500],
                }
            } : {
                primary: {
                    main: colors.primary[500],
                },
                secondary: {
                    main: colors.greenAccent[500],
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100]
                },
                background: {
                    default: "#fcfcfc",
                },
            }),
        },
        typography: {
            fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};


// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {},
  });
  
  export const useMode = () => {
    const [mode, setMode] = useState("dark");
  
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () =>
          setMode((prev) => (prev === "light" ? "dark" : "light")),
      }),
      []
    );
  
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
  };