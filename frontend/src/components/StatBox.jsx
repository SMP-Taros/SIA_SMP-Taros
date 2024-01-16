import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../Theme";

const StatBox = ({ title, icon, progress }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0">
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography
            variant="h6"
            fontWeight="400"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {progress}
          </Typography>
        </Box >
          {icon}
      </Box>
    </Box>
  );
};

export default StatBox;