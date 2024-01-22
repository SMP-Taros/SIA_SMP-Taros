import { Box, IconButton, Tooltip, useTheme } from "@mui/material";
import { Delete, Info } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { tokens } from "../../Theme";
// import { useValue } from '../../../context/ContextProvider';
// import { deleteGuru } from '../../../../backend/controller/guruController';

const GuruActions = ({ params }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const {
  //   dispatch,
  //   state: { currentUser },
  // } = useValue();
  return (
    <Box>
      <Tooltip title="Detail Guru">
        <IconButton
          component={Link}
          to="/guru/detail"
          type="button"
          style={{ color: colors.blueAccent[500] }}
          // onClick={() => dispatch({ type: 'UPDATE_ROOM', payload: params.row })}
        >
          <Info />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton
          style={{ color: colors.redAccent[500] }}
          // onClick={() => deleteGuru(params.row, currentUser, dispatch)}
        >
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default GuruActions;
