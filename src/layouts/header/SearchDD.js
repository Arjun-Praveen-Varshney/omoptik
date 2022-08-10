import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { IconButton, Input, Box, Drawer } from "@mui/material";
import { useRouter } from "next/router";

const SearchDD = () => {
  // drawer top
  const [showDrawer2, setShowDrawer2] = useState(false);
  const [search, setsearch] = useState("");
  const router = useRouter();

  const handleDrawerClose2 = () => {
    setShowDrawer2(false);
  };

  const handleSubmit = () => {
    // console.log("Submit");
    router.push(`?query=${search}`);
    if (search === "products[0].title") {
      console.log("Submit");
    } else {
      console.log("Not Submit");
    }
  };

  const handleChange = (e) => {
    if (e.target.name == "search") {
      setsearch(e.target.value);
    }
  };

  return (
    <>
      <IconButton
        aria-label="show 4 new mails"
        color="inherit"
        aria-controls="search-menu"
        aria-haspopup="true"
        onClick={() => setShowDrawer2(true)}
        size="large"
      >
        <FeatherIcon icon="search" width="20" height="20" />
      </IconButton>
      <Drawer
        anchor="top"
        open={showDrawer2}
        onClose={() => setShowDrawer2(false)}
        sx={{
          "& .MuiDrawer-paper": {
            padding: "15px 30px",
          },
        }}
      >
        <Box display="flex" alignItems="center">
          <Input
            onChange={handleChange}
            // onSubmit={handleSubmit}
            value={search}
            name="search"
            placeholder="Search here"
            aria-label="description"
            fullWidth
          />
          <Box
            onClick={handleSubmit}
            sx={{
              ml: "auto",
            }}
          >
            <IconButton
              color="inherit"
              sx={{
                color: (theme) => theme.palette.grey.A200,
              }}
              onClick={handleDrawerClose2}
            >
              <FeatherIcon icon="x-circle" />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SearchDD;
