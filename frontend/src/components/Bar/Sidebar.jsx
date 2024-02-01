import { useState } from "react";
import { Sidebar, Menu, SubMenu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, colors, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../Theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import GridViewIcon from "@mui/icons-material/GridView";

import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";

import { useLogoutMutation } from "../../slices/userApiSlice";
import { logout } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";

const menuItemStyles = {
  root: {
    fontSize: "13px",
    fontWeight: 400,
  },
  button: {
    "&:hover": {
      backgroundColor: "#1a2226",
      color: "#666666",
    },
    color: "#e0e0e0",
  },
  SubMenuExpandIcon: {
    color: "#b6b7b9",
  },
  subMenuContent: ({ level }) => ({
    backgroundColor: level === 0 ? "#1a2226" : "transparent",
  }),
  label: ({ open }) => ({
    fontWeight: open ? 600 : undefined,
  }),
};

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const isActive = selected === title;

  return (
      <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
        <MenuItem
            onClick={() => setSelected(title)}
            icon={icon}
            style={{
              ...menuItemStyles.root,
              ...(isActive && {
                backgroundColor: "#1a2226",
                color: "#666666",
              }),
            }}
        >
          <Typography>{title}</Typography>
        </MenuItem>
      </Link>
  );
};

const ProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("");

  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
      <Box
          bgcolor={colors.primary[500]}
          sx={{
            height: "100%",
          }}
      >
        <Sidebar backgroundColor={colors.primary[500]} collapsed={isCollapsed}>
          <Menu menuItemStyles={menuItemStyles}>
            {/* LOGO AND MENU ICON */}
            <MenuItem
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                  margin: "10px 0 20px 0",
                  color: colors.grey[900],
                }}
            >
              {!isCollapsed && (
                  <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      ml="15px"
                  >
                    <Typography variant="h3" color="#fff">
                      SMP TAROS
                    </Typography>
                    <IconButton
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        style={{
                          color: colors.grey[900],
                        }}
                    >
                      <MenuOutlinedIcon />
                    </IconButton>
                  </Box>
              )}
            </MenuItem>

            {/* USER  */}
            {!isCollapsed && (
                <Box mb="25px">
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <img
                        alt="profile-user"
                        width="100px"
                        height="100px"
                        src={`../../user.png`}
                        style={{ cursor: "pointer", borderRadius: "50%" }}
                    />
                  </Box>
                  <Box textAlign="center">
                    <Typography
                        variant="h2"
                        color="#fff"
                        // color={colors.grey[100]}
                        fontWeight="bold"
                        sx={{ m: "10px 0 0 0" }}
                    >
                      {userInfo ? userInfo.username : "null"}
                    </Typography>
                    <Typography variant="h5" color={colors.greenAccent[500]}>
                      SMP TAROS Admin
                    </Typography>
                  </Box>
                </Box>
            )}

            {/* MENU ITEM */}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
                  title="Dashboard"
                  to="/dashboard"
                  icon={<HomeOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
              />
              <SubMenu
                  label="Data Master"
                  icon={<GridViewIcon />}
                  style={{
                    color: colors.grey[900],
                  }}
              >
                <Item
                    title="Siswa"
                    to="/siswa"
                    icon=""
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Calon Siswa"
                    to="/calon_siswa"
                    icon=""
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Guru"
                    to="/guru"
                    icon=""
                    selected={selected}
                    setSelected={setSelected}
                />
              </SubMenu>
              <MenuItem
                  icon={<LogoutIcon style={{ color: "#FF6868" }} />}
                  style={{
                    color: "#FF6868",
                  }}
                  onClick={logoutHandler}
              >
                Logout
              </MenuItem>
            </Box>
          </Menu>
        </Sidebar>
      </Box>
  );
};

export default ProSidebar;
