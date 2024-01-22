import { Box, Typography } from "@mui/material";

const CustomTabPanel = ({ children, value, index }) => {
    return (
       <div role="tabpanel" hidden={value !== index}>
          {value === index && (
             <Box p={3}>
                <Typography>{children}</Typography>
             </Box>
          )}
       </div>
    );
 };

export default CustomTabPanel;
