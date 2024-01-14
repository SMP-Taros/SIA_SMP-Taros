import { ColorModeContext, useMode } from "../../Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "../../components/Bar/Topbar";

function Template({children}) {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            {children}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Template;
