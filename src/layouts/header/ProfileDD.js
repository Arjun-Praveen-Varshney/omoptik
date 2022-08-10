import React from "react";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import { useRouter } from "next/router";
// import userimg from "../../../assets/images/users/user2.jpg";
import {
  Box,
  Menu,
  Typography,
  Link,
  ListItemButton,
  List,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";
const ProfileDD = () => {
  const [anchorEl4, setAnchorEl4] = React.useState(null);

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  const router = useRouter();
  return (
    <>
      <Button
        aria-label="menu"
        color="inherit"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick4}
      >
        <Box display="flex" alignItems="center">
          <Image
            src="/ARJUN.png"
            alt="userimg"
            width="30"
            height="30"
            className="roundedCircle"
          />
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              alignItems: "center",
            }}
          >
            <Typography
              color="textSecondary"
              variant="h5"
              fontWeight="400"
              sx={{ ml: 1 }}
            >
              Hi,
            </Typography>
            <Typography
              variant="h5"
              fontWeight="700"
              sx={{
                ml: 1,
              }}
            >
              Praveen
            </Typography>
            <FeatherIcon icon="chevron-down" width="20" height="20" />
          </Box>
        </Box>
      </Button>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl4}
        keepMounted
        open={Boolean(anchorEl4)}
        onClose={handleClose4}
        sx={{
          "& .MuiMenu-paper": {
            width: "385px",
          },
        }}
      >
        <Box>
          <Box p={2} pt={0}>
            <List
              component="nav"
              aria-label="secondary mailbox folder"
              onClick={handleClose4}
            >
              <ListItemButton
                onClick={() => {
                  router.push("/myaccount");
                }}
              >
                <ListItemText primary="Edit Profile" />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  router.push("/signup");
                }}
              >
                <ListItemText primary="Create new user" />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  router.push("/myaccount");
                }}
              >
                <ListItemText primary="Change Password" />
              </ListItemButton>
            </List>
          </Box>
          <Divider />
          <Box p={2}>
            <Link to="/">
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                onClick={() => {
                  localStorage.removeItem("myuser");
                  setTimeout(() => {
                    router.push("/login");
                  }, 1000);
                }}
              >
                Logout
              </Button>
            </Link>
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export default ProfileDD;
