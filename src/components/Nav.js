import React, { useEffect, useState } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import assets from "../assests";
import "../assests/css/navbar.css";
import { CgProfile } from "react-icons/cg";
import { useToast } from "@chakra-ui/react";

const NavBar = () => {
  let [isLogin, setLogin] = useState(true);
  let toast = useToast();
  let navigate = useNavigate();
  const [admin, setAdmin] = useState(false);
  const [userName, setUsername] = useState("");
  useEffect(() => {
    let role = localStorage.getItem("role");
    let username = localStorage.getItem("userName");

    if (username != null) {
      setUsername(username);
    }

    if (role != "USER") {
      setAdmin(true);
    }
  });

  return (
    <Box
      m="auto"
      fontSize="14px"
      px="20%"
      py="1.3em"
      id="navbar"
      color="white"
      fontWeight="semibold"
    >
      <Image src={assets.images.COMMON.APP_LOGO} alt="Alchemus Logo" />
      {isLogin && (
        <>
          <NavLink to="/dashboard" activeClassName="active-link">
            DASHBOARD
          </NavLink>
          {admin && (
            <NavLink to="/create-user" activeClassName="active-link">
              CREATE USER
            </NavLink>
          )}

          <Box>
            <Text fontSize="1.2em" className="navbar_profile_box">
              <Image
                src={assets.images.LOGIN.PROFILE}
                style={{ marginRight: "0.3em" }}
              />
              {userName}
            </Text>
            <Box className="logout_box">
              {" "}
              <Button
                id="logout_btn"
                onClick={() => {
                  setLogin(false);
                  localStorage.clear();
                  navigate("/");
                }}
                borderRadius={"none"}
              >
                LOGOUT
              </Button>
            </Box>
          </Box>
        </>
        // ) : (
        //   <Box className="nav_login_box" fontSize='md'>
        //     <NavLink  to="/login" activeClassName="active-link">
        //       LOGIN{" "}
        //     </NavLink>
        //     {" | "}
        //     <NavLink  to="/signup" activeClassName="active-link">
        //       {" "}
        //       SIGNUP
        //     </NavLink>
        //   </Box>
      )}
    </Box>
  );
};

export default NavBar;
