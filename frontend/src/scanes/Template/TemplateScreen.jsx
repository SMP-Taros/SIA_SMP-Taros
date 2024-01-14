import { useState } from "react";
import { ColorModeContext, useMode } from "../../Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "../../components/Bar/Topbar";
import Sidebar from "../../components/Bar/Sidebar";

function Template({ children }) {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            {children}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Template;
